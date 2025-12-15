"use client";
import React, { useState } from "react";

export default function Qanda() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const qaItems = [
        {
            id: 1, question: "Which calendar provider(s) is Notion Calendar compatible with?",
            answer: "Answer to question 1."
        },
        {
            id: 2, question: "Is Notion Calendar available on mobile devices?",
            answer: "Answer to question 2."
        },
        {
            id: 3, question: "Question 3?",
            answer: "Answer to question 3."
        },
    ];

    const toggleAnswer = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="p-16 w-full max-w-4xl mx-auto">
            <h2 className="p-4 text-4xl font-bold mb-6">Q&A Section</h2>
            <div className="space-y-3">
                {qaItems.map((item) => (
                    <div key={item.id} className="border-b p-4">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAnswer(item.id)}>
                            <h3 className="text-lg font-semibold">{item.question}</h3>
                            <button className="text-2xl font-bold focus:outline-none">
                                {expandedId === item.id ? "x" : "+"}
                            </button>
                        </div>
                        {expandedId === item.id && (
                            <p className="mt-3 text-gray-700">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}