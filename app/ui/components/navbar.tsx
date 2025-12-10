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
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <div className="hidden md:flex space-x-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:underline">
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