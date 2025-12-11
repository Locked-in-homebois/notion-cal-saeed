import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center p-6 ">

        <Image
          src="/notion-img.png"
          alt="Notion Cal main picture"
          width={170}
          height={170}
          draggable="false"
        />


        <h1 className="text-6xl font-bold">Its time.</h1>
        <p className="p-4 text-center text-xl max-w-lg">
          All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.
        </p>
        <Link className="mb-8" href="/">
        <button className="bg-black text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-800 transition">
          Get Notion Calendar free
        </button>
        </Link>

        <Image className="md:rounded md:shadow-2xl p-10"
          src = "/notion-phone.png"
          alt="Notion Cal second picture"
          width={1500}
          height={600}
          draggable="false"
        />
    </main>
  );
}