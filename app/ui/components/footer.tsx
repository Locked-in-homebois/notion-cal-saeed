import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="w-full bg-white py-8 px-4 flex flex-col md:flex-row justify-around items-center border-t-2 border-gray-100">

            <div className="flex flex-col gap-1">
                <div className='flex items-center gap-2'>
                    <Image
                        src="/notion-calendar-icom.svg"
                        alt='notion icon'
                        width={50}
                        height={50}
                    />
                    <h2 className="text-3xl font-bold gap-3">Notion</h2>
                </div>

                <div className='pt-3'>
                    <Image
                        src="/gm-icon.svg"
                        alt='gm icon'
                        width={20}
                        height={20}
                    />

                </div>

                <div>
                    <p className="text-gray-600 mt-2">© 2025 MyCompany. All rights reserved.</p>
                </div>


            </div>


            <div className="flex flex-col justify-center items-center">
                <p className='font-bold pb-1'>Company</p>
                <div className='flex flex-col text-gray-600 mx-2 my-2 gap-1'>
                    <Link href="/privacy-policy" className='hover:text-black'>About Us</Link>
                    <Link href="/terms-of-service">Careers</Link>
                    <Link href="/contact">Security</Link>
                    <Link href="/blog" >Blog</Link>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <p className='font-bold pb-2'>Company</p>
                <div className='flex flex-col text-gray-600 mx-2 my-2 gap-1'>
                    <Link href="/privacy-policy">About Us</Link>
                    <Link href="/terms-of-service">Careers</Link>
                    <Link href="/contact">Security</Link>
                    <Link href="/blog" >Blog</Link>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center">
                <p className='font-bold pb-2'>Company</p>
                <div className='flex flex-col text-gray-600 mx-2 my-2 gap-1'>
                    <Link href="/privacy-policy">About Us</Link>
                    <Link href="/terms-of-service">Careers</Link>
                    <Link href="/contact">Security</Link>
                    <Link href="/blog" >Blog</Link>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center">
                <p className='font-bold pb-2'>Company</p>
                <div className='flex flex-col text-gray-600 mx-2 my-2 gap-1'>
                    <Link href="/privacy-policy">About Us</Link>
                    <Link href="/terms-of-service">Careers</Link>
                    <Link href="/contact">Security</Link>
                    <Link href="/blog" >Blog</Link>
                </div>
            </div>

        </div>
    );
}           