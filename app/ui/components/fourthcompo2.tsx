import Image from 'next/image';

export default function FourthCompo2() {
    return (
        <main className="flex flex-col items-center justify-center ">

            <div className=" container grid md:grid-cols-3 mt-16 gap-4 md:w-270 w-90 flex-1">

                <div className="md:-w-4xl rounded-lg bg-[#f6f5f4] shadow-xl ">
                    <Image className="m-6"
                        src="/notion-icon.svg"
                        alt="notion calender icon"
                        width={27}
                        height={27}
                        draggable="false"
                    />

                    <h3 className="px-6 pt-1 pb-0 font-extrabold text-lg mt-2 mb-2">
                        Connect and create Notion docs
                    </h3>
                    <p className="px-6 pt-1 pb-4 text-lg max-w-lg mt-2 mb-2">
                        With info from Notion right in your calendar, you’ll always have full context for every meeting.
                    </p>

                </div>

                <div className="rounded-xl bg-[#f6f5f4] w-full h-full shadow-xl">
                    <Image className="m-6"
                        src="/gc-icon.svg"
                        alt="Checkmark icon"
                        width={27}
                        height={27}
                        draggable="false"
                    />

                    <h3 className="px-6 pt-2 pb-0 font-extrabold text-lg mt-2 mb-2">
                        Update project timelines
                    </h3>
                    <p className="px-6 pt-1 pb-4 text-lg max-w-lg mt-2 mb-2">
                        Just drag and drop to edit Notion database items without leaving your calendar.
                    </p>


                </div>

                <div className="rounded-xl bg-[#f6f5f4] w-full h-full shadow-xl">
                    <Image className="m-6"
                        src="/gm-icon.svg"
                        alt="Checkmark icon"
                        width={27}
                        height={27}
                        draggable="false"
                    />

                    <h3 className="px-6 pt-2 pb-0 font-extrabold text-lg mt-2 mb-2">
                        Update project timelines
                    </h3>
                    <p className="px-6 pt-1 pb-4 text-lg max-w-lg mt-2 mb-2">
                        Just drag and drop to edit Notion database items without leaving your calendar.
                    </p>


                </div>
            </div>
        </main>
    );
}