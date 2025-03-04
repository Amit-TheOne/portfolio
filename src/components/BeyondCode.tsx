"use client";

import { hobbiesData } from "@/data/hobbiesData";
import { motion } from "framer-motion";
import { useRef } from "react";

export const BeyondCode = () => {
    const constraintRef = useRef(null);

    return (
        <div className="relative flex-1" ref={constraintRef}>
            {hobbiesData.map((hobby) => (
                <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-2 absolute hover:cursor-grab"
                    style={{
                        left: hobby.left,
                        top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                >
                    <span className="font-medium text-gray-950">
                        {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                </motion.div>
            ))}
        </div>
    );
};
