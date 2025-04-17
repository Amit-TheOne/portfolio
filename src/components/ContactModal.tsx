"use client";

import { useState, useEffect, useRef } from "react";
import grainImage from "@/assets/images/grain.jpg";

export const ContactModal = ({ onClose }: { onClose: () => void }) => {
    const conatinerRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Message sent successfully!");
                onClose();
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        const handleClick = (e: MouseEvent) => {
            if (conatinerRef.current && e.target === conatinerRef.current) {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("click", handleClick);
        };
    }, [onClose]);

    return (
        <div
            ref={conatinerRef}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
            <div className="bg-gray-900 outline outline-1 outline-gray-200 text-white px-8 pt-4 pb-8 md:px-10 md:pb-10 rounded-2xl h- w-4/5 md:w-full max-w-xl space-y-6 relative z-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 -z-10"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}
                />
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                    Contact Me
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 md:mb-6">
                        <label className="block text-sm md:text-base font-medium mb-1 md:mb-3 text-left">
                            Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="John Smith"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-gray-700 outline-none border border-gray-500 rounded px-3 py-2 focus:border-gray-200 transition duration-150 ease-in-out"
                            required
                        />
                    </div>
                    <div className="mb-4 md:mb-6">
                        <label className="block text-sm md:text-base font-medium mb-1 md:mb-3 text-left">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="johnsmith@mail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-700 outline-none border border-gray-500 rounded px-3 py-2 focus:border-gray-200 transition duration-150 ease-in-out"
                            required
                        />
                    </div>
                    <div className="mb-4 md:mb-6">
                        <label className="block text-sm md:text-base font-medium mb-1 md:mb-3 text-left">
                            Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="Type your message here..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-gray-700 outline-none border border-gray-500 rounded px-3 py-2 focus:border-gray-200 transition duration-150 ease-in-out resize-none"
                            rows={6}
                            required
                            minLength={10}
                        />
                    </div>
                    <div className="flex gap-6 mt-6 md:mt-8">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-white bg-black px-6 h-12 rounded-xl font-semibold w-max border border-gray-500 hover:bg-gray-800 hover:border-white/80 transition-all duration-[600ms]"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="text-white bg-slate-500 px-6 h-12 rounded-xl font-semibold w-max border border-slate-300 hover:bg-slate-800 hover:border-white transition-all duration-[600ms]"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
