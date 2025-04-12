import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import grainImage from "@/assets/images/grain.jpg";
import { Fragment } from "react";

export const SkillItems = ({
    skillItems,
    className,
    itemsWrapperClassName,
}: {
    skillItems: {
        title: string;
        iconType: React.ElementType;
    }[];
    className?: string;
    itemsWrapperClassName?: string;
}) => {
    return (
        <div
            className={twMerge(
                "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                className
            )}
        >
            <div
                className={twMerge(
                    "flex flex-none py-3 gap-6",
                    itemsWrapperClassName
                )}
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {skillItems.map((item) => (
                            <div
                                key={item.title}
                                className="inline-flex items-center gap-4 px-3 py-2 outline outline-2 outline-white/10 rounded-lg bg-gray-800 relative z-0 hover:scale-110 hover:rotate-3 transition-transform duration-300 ease-in-out"
                            >
                                <div
                                    className="absolute inset-0 -z-10 opacity-5"
                                    style={{
                                        backgroundImage: `url(${grainImage.src})`,
                                    }}
                                />
                                <TechIcon component={item.iconType} />
                                <span className="md:text-lg font-medium">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};
