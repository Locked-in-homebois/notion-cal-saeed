import QNAItem from "./QNAItem";

const quests = [
    {
        question: "Which calendar provider(s) is Notion Calendar compatible with?",
        answer: "Currently, Notion Calendar integrates and syncs with Google Calendar accounts and Apple iCloud-synced Calendars. Adding support for other calendar providers such as Outlook is on our roadmap."
    },
    {
        question: "Is Notion Calendar available on mobile devices?",
        answer: "Yes, Notion Calendar is available for iPhone and Android devices. We know some users are looking for an optimized version for tablet devices, such as iPad, and are working to make Notion Calendar the best experience on all platforms."
    },
    {
        question: "Does Notion Calendar bring Google Calendar sync to Notion?",
        answer: "Notion Calendar allows you to view your Notion database items alongside your Google Calendar events. This offers a streamlined way to see project timelines and task due dates alongside other scheduled events. However, importing Google Calendar events directly into a Notion database is not yet possible. We’re always exploring new ways for Notion and calendars to interact. Expect exciting developments soon!"
    },
];

const QNASection = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="container mx-auto px-4"></div>
            <h1 className="text-2xl font-bold uppercase">
                question & answer
            </h1>
            <div className="">
                {quests.map((suitcase, index) => (
                    <QNAItem
                        question={suitcase.question}
                        answer={suitcase.answer}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default QNASection;