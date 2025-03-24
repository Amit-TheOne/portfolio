"use client";

import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactButton = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);

    return (
        <>
            <button
                onClick={handleOpenModal}
                className="text-white bg-gray-900 inline-flex gap-2 items-center px-6 h-12 rounded-xl w-max border border-gray-900 hover:bg-gray-900/50 hover:text-white hover:border-white/80 transition duration-[600ms]"
            >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
            </button>
            {isModalOpen && <ContactModal onClose={handleCloseModal} />}
        </>
    );
};
