import Link from 'next/link';

export default function Footer() {
    return (
        <div className="w-full bg-gray-100 text-center py-4 mt-16">
            <div className="flex flex-col gap-4 mt-2 justify-center items-center">
                <p className="text-sm text-gray-600">
                    <Link href="/privacy-policy" className="text-sm text-gray-600 hover:underline mx-2">About Us</Link>
                    <Link href="/terms-of-service" className="text-sm text-gray-600 hover:underline mx-2">Careers</Link>
                    <Link href="/contact" className="text-sm text-gray-600 hover:underline mx-2">Security</Link>
                    <Link href="/blog" className="text-sm text-gray-600 hover:underline mx-2">Blog</Link>
                </p>
            </div>
        </div>
    );
}           