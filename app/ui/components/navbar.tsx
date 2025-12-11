"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact-us", label: "Contact" },
 ];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white-800 text-black p-4 shadow-md">
            <div className="container mx-auto flex justify-center items-center relative">
                <div className="text-lg font-bold pr-4 absolute left-4">MOFOS</div>
                <div className="hidden md:flex space-x-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:bg-gray-200 px-3 py-2 rounded-md">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block hover:underline"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}