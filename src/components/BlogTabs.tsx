import React, { useRef, useLayoutEffect, useState } from "react";

type Tab = {
    label: string;
    value: string;
};

interface BlogTabsProps {
    tabs: Tab[];
    selected: string;
    onSelect: (value: string) => void;
}

export const BlogTabs: React.FC<BlogTabsProps> = ({ tabs, selected, onSelect }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [bgStyle, setBgStyle] = useState<React.CSSProperties>({});

    useLayoutEffect(() => {
        const idx = tabs.findIndex(tab => tab.value === selected);
        const tabNode = tabRefs.current[idx];
        const containerNode = containerRef.current;
        
        if (tabNode && containerNode) {
            const tabRect = tabNode.getBoundingClientRect();
            const containerRect = containerNode.getBoundingClientRect();
            setBgStyle({
                left: tabRect.left - containerRect.left,
                width: tabRect.width,
                height: tabRect.height,
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                borderRadius: "0.5rem",
                background: "#e5e7eb",
                position: "absolute",
            });
        }
    }, [selected, tabs]);

    return (
        <div
            ref={containerRef}
            className="relative max-w-fit border border-gray-500/20 mt-14 md:mt-20 mx-auto p-2 rounded-2xl bg-gray-800/50"
        >
            <span
                style={bgStyle}
                aria-hidden="true"
            />
            
            {tabs.map((tab, idx) => {
                const isSelected = selected === tab.value;
                return (
                    <button
                        key={tab.value}
                        ref={el => { tabRefs.current[idx] = el }}
                        role="tab"
                        className={`relative text-2xl md:text-3xl lg:text-3xl px-4 py-1.5 rounded-xl transition-all duration-300 font-serif tracking-wide
                            ${isSelected ? "text-gray-950" : "text-gray-100"}
                        `}
                        onClick={() => onSelect(tab.value)}
                        aria-selected={isSelected}
                        aria-controls={`${tab.value}-panel`}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
};