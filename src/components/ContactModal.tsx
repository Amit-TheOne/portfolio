"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import grainImage from "@/assets/images/grain.jpg";
import emailjs from "@emailjs/browser";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const formFieldsData: FormData = {
    name: "",
    email: "",
    message: "",
};

export const ContactModal = ({ onClose }: { onClose: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const form = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const [formData, setFormData] = useState(formFieldsData);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSuccess = () => {
        setSending(false);
        setIsSuccess(true);
        setFormData(formFieldsData);
        setTimeout(() => {
            setIsSuccess(false);
            onClose();
        }, 4000);
    };

    const handleError = (error: string) => {
        setError(error);
        setTimeout(() => {
            setError(null);
            if (
                error ===
                "Failed to send message by mail service. Please try again later."
            ) {
                onClose();
            }
        }, 3000);
    };

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    }, [onClose]);

    useEffect(() => {
        setIsVisible(true);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && e.target === containerRef.current) {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("click", handleClickOutside);

        return () => {
            setIsVisible(false);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("click", handleClickOutside);
        };
    }, [handleClose]);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (sending) {
            handleError("Sending your message. Please wait...!!");
            return;
        }

        try {
            if (form.current) {
                const { name, email, message } = formData;

                if (!name || !email || !message) {
                    handleError("All fields are required.");
                    return;
                }
                if (message.length < 10) {
                    handleError("Message must be at least 10 characters long.");
                    return;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
                    handleError("Please enter a valid email address.");
                    return;
                }

                setSending(true);

                const emailSendResponse = await emailjs.sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                    form.current,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
                );

                if (emailSendResponse.text === "OK") {
                    handleSuccess();
                } else {
                    setSending(false);
                    handleError(
                        "Failed to send message. Please try again later."
                    );
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setSending(false);
            handleError(
                "Failed to send message by mail service. Please try again later."
            );
            setFormData(formFieldsData);
        }
    };

    return (
        <div
            ref={containerRef}
            className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div
                className={`bg-gray-900 outline outline-1 outline-gray-200 text-white px-8 md:px-10 rounded-2xl w-4/5 md:w-full max-w-xl relative z-0 overflow-hidden transition-transform duration-300 ${
                    isVisible ? "scale-100" : "scale-90"
                }`}
            >
                <div
                    className="absolute inset-0 opacity-10 -z-10"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}
                />
                <div className="flex flex-col gap-2">
                    <div className="text-2xl md:text-3xl font-semibold mt-8 mb-5 text-center">
                        Contact Me
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-4 md:mb-6">
                            <label className="block text-sm md:text-base font-medium mb-1 md:mb-3 text-left">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Smith"
                                value={formData.name}
                                onChange={handleChange}
                                onInvalid={(e) =>
                                    e.currentTarget.setCustomValidity(
                                        "Name is required."
                                    )
                                }
                                onInput={(e) =>
                                    e.currentTarget.setCustomValidity("")
                                }
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
                                onInvalid={(e) =>
                                    e.currentTarget.setCustomValidity(
                                        "Email is required. Please enter a valid email address."
                                    )
                                }
                                onInput={(e) =>
                                    e.currentTarget.setCustomValidity("")
                                }
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
                                onInvalid={(e) =>
                                    e.currentTarget.setCustomValidity(
                                        "Please enter message."
                                    )
                                }
                                onInput={(e) =>
                                    e.currentTarget.setCustomValidity("")
                                }
                                className="w-full bg-gray-700 outline-none border border-gray-500 rounded px-3 py-2 focus:border-gray-200 transition duration-150 ease-in-out resize-none"
                                rows={6}
                                minLength={10}
                                required
                            />
                        </div>
                        <div className="flex gap-6 mt-6 md:mt-8 mb-8 md:mb-10">
                            <button
                                type="button"
                                onClick={handleClose}
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

                {sending && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/75 z-20">
                        <p className="text-white md:text-lg animate-bounce">
                            Sending...
                        </p>
                    </div>
                )}

                {isSuccess && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/75 z-20">
                        <p className="text-white md:text-lg text-center">
                            Message sent successfully.
                            <br />
                            Thank you!!
                        </p>
                    </div>
                )}
                {error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/75 z-10">
                        <p className="text-red-600 text-center w-8/12">
                            {error}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
