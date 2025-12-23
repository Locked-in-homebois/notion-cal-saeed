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
        <nav className="sticky top-0 bg-white text-black p-7 shadow-md font-bold justify-between">
            <div className="flex mx-auto justify-center items-center relative">
                <div className="md:left-4 absolute left-4 items-center flex">
                    <Image
                        src="/notion-icon.svg"
                        alt="Notion Logo"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="hidden md:flex space-x-4">
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} className="hover:bg-gray-100 hover:rounded-sm hover:transition-all">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="md:absolute md:right-1 ">
                    <Link className="md:mb-8 " href="/">
                        <button className=" bg-black text-white items-end font-semiboldor hover:bg-gray-600 transition p-2 rounded-md">
                            Get Notion Calendar free
                        </button>
                    </Link>
                </div>

                <div className="md:hidden absolute right-1 p-2 text-3xl">
                    <button onClick={() => setIsOpen(!isOpen)} className="">
                        ☰
                    </button>

                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col justify-center items-center gap-3 mt-4">
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="hover:underline">
                            {link.label}
                        </Link>
                    ))}
                </div>

            )}
        </nav >
    );
}