"use client";

import React, { useState } from "react";

export default function Qanda() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const quests = [
        {
            id: 1, question: "Which calendar provider(s) is Notion Calendar compatible with?",
            answer: "Currently, Notion Calendar integrates and syncs with Google Calendar accounts and Apple iCloud-synced Calendars. Adding support for other calendar providers such as Outlook is on our roadmap."
        },
        {
            id: 2, question: "Is Notion Calendar available on mobile devices?",
            answer: "Yes, Notion Calendar is available for iPhone and Android devices. We know some users are looking for an optimized version for tablet devices, such as iPad, and are working to make Notion Calendar the best experience on all platforms."
        },
        {
            id: 3, question: "Does Notion Calendar bring Google Calendar sync to Notion?",
            answer: "Notion Calendar allows you to view your Notion database items alongside your Google Calendar events. This offers a streamlined way to see project timelines and task due dates alongside other scheduled events. However, importing Google Calendar events directly into a Notion database is not yet possible. We’re always exploring new ways for Notion and calendars to interact. Expect exciting developments soon!"
        },
    ];

    const toggleAnswer = (id: number) => { setExpandedId(expandedId === id ? null : id); };

    return (
        <div className="p-16 w-full max-w-4xl mx-auto">
            <h2 className="p-4 text-4xl font-bold mb-6">Q&A Section</h2>
            <div className="space-y-3">
                {quests.map((item) => (
                    <div key={item.id} className="border-b p-4">
                        <div className="flex items-center justify-between" onClick={() => toggleAnswer(item.id)}>
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