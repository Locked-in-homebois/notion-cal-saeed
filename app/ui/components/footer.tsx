import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <div className="w-full bg-white py-8 px-4 flex flex-col md:flex-row justify-around items-center border-t-2 border-gray-100">

            <div className="flex flex-col gap-1">
                <div className='flex items-center gap-1'>
                    <Image
                        src="/notion-icon.svg"
                        alt='notion icon'
                        width={50}
                        height={50}
                    />
                    <h2 className="text-3xl font-bold">otion</h2>
                </div>

                <div className='flex items-center gap-2 pt-4 pb-2'>
                    <Link href="https://youtu.be/eJXD-flBfbs?si=bRaFqAMItTBCpJKK">
                        <Instagram
                            width={20}
                            height={20}
                            className='hover:bg-gray-300'
                        />
                    </Link>

                    <Link href="https://youtu.be/eJXD-flBfbs?si=bRaFqAMItTBCpJKK">
                        <Twitter
                            width={20}
                            height={20}
                            className='hover:bg-gray-300'
                        />
                    </Link>

                    <Link href="https://youtu.be/eJXD-flBfbs?si=bRaFqAMItTBCpJKK">
                        <Instagram
                            width={20}
                            height={20}
                            className='hover:bg-gray-300'
                        />
                    </Link>

                    <Link href="https://youtu.be/eJXD-flBfbs?si=bRaFqAMItTBCpJKK">
                        <Twitter
                            width={20}
                            height={20}
                            className='hover:bg-gray-300 transition-colors'
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-2 pt-4 pb-2">
                    <button className="px-3 py-1 border border-[#cbcbcb] bg-white text-black rounded-md hover:bg-gray-200 transition">
                        English
                    </button>
                </div>



                <div>
                    <Link href="" className="text-gray-600 hover:underline hover:text-blue-500 mt-2">Cookies settings</Link>
                </div>

                <div>
                    <p className="text-gray-600 mt-2 pb-4">© 2025 MyCompany. All rights reserved.</p>
                </div>


            </div>


            <div className="flex flex-col justify-center items-center">
                <p className='font-bold pb-1'>Company</p>
                <div className='flex flex-col text-gray-600 mx-2 my-2 gap-1'>
                    <Link href="/privacy-policy" className='hover:underline'>About Us</Link>
                    <Link href="/terms-of-service" className='hover:underline' >Careers</Link>
                    <Link href="/contact" className='hover:underline'>Security</Link>
                    <Link href="/blog" className='hover:underline'>Blog</Link>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className='font-bold pb-2'>Company</p>
                <div className='flex flex-col text-gray-600 mx-2 my-2 gap-1'>
                    <Link href="/privacy-policy" className='hover:underline'>About Us</Link>
                    <Link href="/terms-of-service" className='hover:underline'>Careers</Link>
                    <Link href="/contact" className='hover:underline'>Security</Link>
                    <Link href="/blog" className='hover:underline'>Blog</Link>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center">
                <p className='font-bold pb-2'>Company</p>
                <div className='flex flex-col text-gray-600 mx-2 my-2 gap-1'>
                    <Link href="/privacy-policy" className='hover:underline'>About Us</Link>
                    <Link href="/terms-of-service" className='hover:underline'>Careers</Link>
                    <Link href="/contact" className='hover:underline'>Security</Link>
                    <Link href="/blog" className='hover:underline'>Blog</Link>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center">
                <p className='font-bold pb-2'>Company</p>
                <div className='flex flex-col text-gray-600 mx-2 my-2 gap-1'>
                    <Link href="/privacy-policy" className='hover:underline-blue'>About Us</Link>
                    <Link href="/terms-of-service" className='hover:underline'>Careers</Link>
                    <Link href="/contact" className='hover:underline'>Security</Link>
                    <Link href="/blog" className='hover:underline'>Blog</Link>
                </div>
            </div>

        </div>
    );
}           