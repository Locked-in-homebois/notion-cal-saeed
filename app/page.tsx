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
        <Link className="md:mb-8" href="/">
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
        <h1 className="text-4xl font-semibold justify-center text-center mt-16">
          Time management simplified.
        </h1>

        <div className="container w-270 bg-[#f6f5f4] rounded-lg shadow-2xl mt-16 ">
          
          <Image className="m-6"
            src="flash-outline.svg"
            alt="Flash icon"
            width={30}
            height={30}
            draggable="false"
          />

          <h3 className="p-6 font-extrabold text-2xl mb-0">
            See Your schedule at a Glance        
          </h3>
          <p className="p-6 text-lg max-w-lg mb-0">
          Join meetings directly from the menu bar so you can stay focused on the work that matters.
          </p>

          <Image className="rounded-b-lg"
          src="/menu-bar.avif"
          alt="Notion Cal menu bar picture"
          width={1500}
          height={600}
          draggable="false"
          />

        </div>

        <div className="container w-270 bg-[#f6f5f4] rounded-lg shadow-2xl mt-16 ">
          <p>
            hello bchs
          </p>
        </div>
    </main>
  );
}