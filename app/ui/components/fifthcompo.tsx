import Image from 'next/image';

export default function FifthCompo() {
    return (
        <main className="flex flex-col items-center justify-center">

            <h1 className="text-4xl font-extrabold justify-center text-center pt-28 mt-16">
                Get notion calendar for free
            </h1>

            <p className="text-lg mt-4 mb-8 max-w-2xl text-center">
                Unlock a better way to manage your time and life.
            </p>

            <a href="/about" className='text-blue-500 hover:text-black hover:underline'>
                Get Notion Calendar for free
            </a>

            <div className=" container grid md:grid-cols-2 mt-16 gap-4 md:w-270 w-90 flex-1">

                <div className="md:max-w-4xl rounded-lg bg-[#f6f5f4] shadow-xl ">


                    <h3 className="px-6 pt-6 pb-2 font-extrabold text-lg mt-2 mb-2">
                        Desktop app
                    </h3>

                    <div className="flex justify-center items-center rounded-2xl p-4">
                        <Image
                            src="/notion-calendar-desktop-v2.avif"
                            alt="Notion Cal scheduler picture"
                            width={600}
                            height={600}
                            draggable={false}
                        />
                    </div>

                    <div className="flex gap-3 mx-8 pb-8">
                        <button className="px-3 py-1 border border-[#cbcbcb] bg-white text-black rounded-md hover:bg-gray-200 transition">
                            Windows
                        </button>

                        <button className="px-3 py-1 border border-[#cbcbcb] bg-white text-black rounded-md hover:bg-gray-200 transition">
                            Mac
                        </button>

                    </div>

                </div>

                <div className="rounded-xl bg-[#f6f5f4] w-full h-full shadow-xl">


                    <h3 className="px-6 pt-6 pb-2 font-extrabold text-lg mt-2 mb-2">
                        Mobile app
                    </h3>

                    <div className="flex justify-center items-center p-4">
                        <Image
                            src="/notion-calendar-mobile.avif"
                            alt="mobile app picture"
                            width={313}
                            height={313}
                            draggable={false}
                        />
                    </div>

                    <div className="flex gap-5 mx-8 pb-8">
                        <button className="px-3 py-1 border border-[#cbcbcb] bg-white text-black rounded-md hover:bg-gray-200 transition">
                            Apple app store
                        </button>

                        <button className="px-3 py-1 border border-[#cbcbcb] bg-white text-black rounded-md hover:bg-gray-200 transition">
                            Google play store
                        </button>

                    </div>

                </div>

            </div >
        </main >
    )
}