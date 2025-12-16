import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="w-full bg-gray-100 py-8 px-4 flex flex-col md:flex-row justify-around items-center">

            <div>
                <Image
                    src="/notion-calendar-icom.svg"
                    alt='notion icon'
                    width={50}
                    height={50}
                />
                <h2 className="text-2xl font-bold mb-4">MyCompany</h2>
                <p className="text-gray-600">© 2024 MyCompany. All rights reserved.</p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
                <p>Company</p>
                <p className="flex flex-col mx-2 my-2 text-md text-gray-600 text-center justify-center items-center hover:text-black gap-3">
                    <Link href="/privacy-policy">About Us</Link>
                    <Link href="/terms-of-service">Careers</Link>
                    <Link href="/contact">Security</Link>
                    <Link href="/blog">Blog</Link>
                </p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
                <p>Company</p>
                <p className="text-md text-gray-600 text-center justify-center items-center gap-3">
                    <Link href="/privacy-policy" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">About Us</Link>
                    <Link href="/terms-of-service" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">Careers</Link>
                    <Link href="/contact" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">Security</Link>
                    <Link href="/blog" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">Blog</Link>
                </p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
                <p>Company</p>
                <p className="text-md text-gray-600 text-center justify-center items-center gap-3">
                    <Link href="/privacy-policy" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">About Us</Link>
                    <Link href="/terms-of-service" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">Careers</Link>
                    <Link href="/contact" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">Security</Link>
                    <Link href="/blog" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">Blog</Link>
                </p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
                <p>Company</p>
                <p className="text-md text-gray-600 text-center justify-center items-center gap-3">
                    <Link href="/privacy-policy" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">About Us</Link>
                    <Link href="/terms-of-service" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">Careers</Link>
                    <Link href="/contact" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">Security</Link>
                    <Link href="/blog" className="flex flex-col text-gray-600 hover:underline mx-2 my-2">Blog</Link>
                </p>
            </div>
        </div>
    );
}           