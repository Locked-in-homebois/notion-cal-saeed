import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center ">

        <Image className="p-6"
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

        <div className=" container grid grid-cols-2 grid-rows-2 md:w-270 mt-16 gap-4 ">

          <div className="md:max-w-4xl rounded-lg bg-[#f6f5f4]">
            <Image className="m-6"
              src="/time.svg"
              alt="Time icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 font-extrabold text-lg mt-2 mb-2">
              Built-in scheduling       
            </h3>
            <p className="p-6 text-lg max-w-lg mt-2 mb-2">
              Send your availability and scheduling link to let others book time with you. No separate app.
            </p>

            <Image
              src="/scheduler.avif"
              alt="Notion Cal scheduler picture"
              width={500}
              height={300}
              draggable="false"
            />

          </div>

          <div className="rounded-xl bg-[#f6f5f4] w-full h-full">
            <Image className="m-6"
              src="/checkmark-done-circle.svg"
              alt="Checkmark icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 font-extrabold text-lg mt-2 mb-2">
              Work across time zones       
            </h3>
            <p className="p-7 text-lg max-w-lg mt-2 mb-2">
              Thoughtfully collaborate with global teams as you visualize your day across time zones.
            </p>

            <Image
              src="/timezones.avif"
              alt="time zones picture"
              width={500}
              height={300}
              draggable="false"
            />
          </div>
          
          <div className="rounded-xl bg-[#f6f5f4] w-full h-full">
            <Image className="m-6"
              src="/terminal.svg"
              alt="Terminal icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 font-extrabold text-lg mt-2 mb-2">
              Modern design       
            </h3>
            <p className="p-6 text-lg max-w-lg mt-2 mb-2">
              Send your availability and scheduling link to let others book time with you. No separate app.
            </p>

            <Image
              src="/command-bar.avif"
              alt="Notion Cal command bar picture"
              width={500}
              height={300}
              draggable="false"
            />
          </div>

          <div className="rounded-xl   bg-[#f6f5f4] w-full h-full">
            <Image className="m-6"
              src="/language.svg"
              alt="Language icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 font-extrabold text-lg mt-2 mb-2">
              Available in 12 languages       
            </h3>
            <p className="p-6 text-lg max-w-lg mt-2 mb-2">
              Send your availability and scheduling link to let others book time with you. No separate app.
            </p>

            <Image
              src="/languages.avif"
              alt="Notion Cal languages picture"
              width={500}
              height={300}
              draggable="false"
            />
          </div>

        </div>
    </main>
  );
}