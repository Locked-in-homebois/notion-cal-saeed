"use client";
import React, { useState } from "react";


export default function Qanda() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
                    <div className="p-4 border-b">
                        <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                            ✕
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">Q&A Section</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold">Question 1?</h3>
                                <p className="mt-2">Answer to question 1.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Question 2?</h3>
                                <p className="mt-2">Answer to question 2.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Question 3?</h3>
                                <p className="mt-2">Answer to question 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}