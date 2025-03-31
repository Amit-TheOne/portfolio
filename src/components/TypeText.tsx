"use client";

import { useState, useEffect } from "react";

interface TypeTextProps {
    text: string;
    delay: number;
    className: string;
    minHeight: string;
}

export const TypeText: React.FC<TypeTextProps> = ({
    text,
    delay,
    className,
    minHeight,
}) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const timeouts: NodeJS.Timeout[] = [];

        text.split("").forEach((char, index) => {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + char);
            }, delay * 1000 + index * 150); // Delay in sec + 100ms per character
            timeouts.push(timeout);
        });

        return () => timeouts.forEach((timeout) => clearTimeout(timeout));
    }, [text, delay]);

    return (
        <div className={className} style={{ minHeight }}>
            {displayedText}
        </div>
    );
};
