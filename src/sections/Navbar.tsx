"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavbarMenuIcon from "@/assets/icons/navbar-menu.svg";
import CloseMenu from "@/assets/icons/close-menu.svg";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navMenuRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleClose = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                navMenuRef.current && !navMenuRef.current.contains(e.target as Node)
            ) {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-center items-center fixed top-3 w-full z-10 px-5 md:px-0">
            <div className="w-full md:w-[90%] max-w-2xl md:max-w-5xl mx-auto flex items-center justify-between px-6 py-2 pl-8 md:pr-4 lg:pr-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur">

                {/* Logo Section */}
                <div className="inline-flex justify-center items-baseline gap-3 md:gap-3">
                    <span className="text-white font-serif text-xl md:text-2xl font-semibold tracking-wide cursor-pointer">
                        <Link href="#home">Amit Dewangan</Link>
                    </span>
                    <span className="w-3 h-3 rounded-full bg-gradient-to-b from-emerald-300 to-sky-400 animate-bounce" />
                </div>

                <div className="flex items-center justify-end w-auto">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex">
                        <nav className="flex gap-1 p-0.5">
                            <Link href="#home" className="nav-item">
                                Home
                            </Link>
                            <Link href="#about" className="nav-item">
                                About
                            </Link>
                            <Link href="#projects" className="nav-item">
                                Projects
                            </Link>
                            <Link href="#skills" className="nav-item">
                                Skills
                            </Link>
                            <Link href="#contact" className="nav-item">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex md:hidden relative">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white rounded-full -m-1 p-2 focus:bg-gray-600 transition-all duration-200 ease-in-out"
                        >
                            {isMobileMenuOpen ? (
                                <CloseMenu className="size-6 fill-white" />
                            ) : (
                                <NavbarMenuIcon className="size-6 fill-white" />
                            )}
                        </button>

                        {isMobileMenuOpen && (
                            <div
                                ref={navMenuRef}
                                className="absolute top-full -right-11 mt-2 bg-gray-800 text-white rounded-lg shadow-lg p-4"
                            >
                                <nav className="flex flex-col justify-center items-center gap-4 px-5 py-2">
                                    <Link
                                        href="#home"
                                        className="nav-item"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="#about"
                                        className="nav-item"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="#projects"
                                        className="nav-item"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Projects
                                    </Link>
                                    <Link
                                        href="#skills"
                                        className="nav-item"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Skills
                                    </Link>
                                    <Link
                                        href="#contact"
                                        className="nav-item"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        Contact
                                    </Link>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
