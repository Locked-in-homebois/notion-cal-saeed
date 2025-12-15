"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "Notion" },
    { href: "/about", label: "Mail" },
    { href: "/contact-us", label: "Calendar" },
    { href: "/services", label: "AI" },
    { href: "/", label: "Enterprise" },
    { href: "/about", label: "Pricing" },
    { href: "/contact-us", label: "Explore" },
    { href: "/services", label: "Request Demo" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="sticky top-0.5 bg-white text-black p-4  shadow-md font-bold">
            <div className="container flex mx-auto md:justify-center justify-between items-center relative">
                <div className="absolute left-4 justify-between items-center flex">
                    <Image
                        src="/notion-calendar-icom.svg"
                        alt="Notion Logo"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="hidden md:flex space-x-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        ☰
                    </button>

                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col justify-center items-center gap-3 mt-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="hover:underline">
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav >
    );
}