"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

interface QNAItemProps {
    question: string;
    answer: string;
}

const QNAItem: React.FC<QNAItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <div className="border-b border-gray-500 py-4">
            <button className="flex w-full text-left justify-between" onClick={toggleMenu}>
                <h1 className=" text-lg font-bold text-black">{question}</h1>
                <Plus
                    className={`text-gray-700 transition-transform duration-500 ${isOpen ? "rotate-45" : "rotate-0"
                        }`}
                />
            </button>
            {isOpen && (

                <div className="text-lg text-gray-500 ">
                    <p>{answer}</p>
                </div>

            )}
        </div>
    )
};

export default QNAItem;