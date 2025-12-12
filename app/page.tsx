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

        <Image className="md:shadow-xl bg-white p-4 rounded-[20px] mt-16"
          src = "/notion-phone.png"
          alt="Notion Cal second picture"
          width={1500}
          height={600}
          draggable="false"
        />
        <h1 className="text-4xl font-semibold justify-center text-center mt-16">
          Time management simplified.
        </h1>

        <div className="container md:w-270 w-90 bg-[#f6f5f4] rounded-lg shadow-xl mt-16 ">
          
          <Image className="m-6"
            src="flash-outline.svg"
            alt="Flash icon"
            width={30}
            height={30}
            draggable="false"
          />

          <h3 className="px-6 pt-6 pb-2 font-extrabold text-2xl mb-0">
            See Your schedule at a Glance        
          </h3>
          <p className="px-6 pt-2 pb-4 text-lg max-w-lg mb-0">
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

        <div className=" container grid md:grid-cols-2 grid-rows-2 mt-16 gap-4 md:w-270 w-90 flex-1"> 

          <div className="md:max-w-4xl rounded-lg bg-[#f6f5f4] shadow-xl ">
            <Image className="m-6"
              src="/time.svg"
              alt="Time icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 pt-6 pb-2 font-extrabold text-lg mt-2 mb-2">
              Built-in scheduling       
            </h3>
            <p className="px-6 pt-2 pb-4 text-lg max-w-lg mt-2 mb-2">
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

          <div className="rounded-xl bg-[#f6f5f4] w-full h-full shadow-xl">
            <Image className="m-6"
              src="/checkmark-done-circle.svg"
              alt="Checkmark icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 pt-6 pb-2 font-extrabold text-lg mt-2 mb-2">
              Work across time zones       
            </h3>
            <p className="px-6 pt-2 pb-4 text-lg max-w-lg mt-2 mb-2">
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
          
          <div className="rounded-xl bg-[#f6f5f4] w-full h-full shadow-xl">
            <Image className="m-6"
              src="/terminal.svg"
              alt="Terminal icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 pt-6 pb-2 font-extrabold text-lg mt-2 mb-2">
              Modern design       
            </h3>
            <p className="px-6 pt-2 pb-4 text-lg max-w-lg mt-2 mb-2">
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

          <div className="rounded-xl   bg-[#f6f5f4] w-full h-full shadow-xl">
            <Image className="m-6"
              src="/language.svg"
              alt="Language icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 pt-6 pb-2 font-extrabold text-lg mt-2 mb-2">
              Available in 12 languages       
            </h3>
            <p className="px-6 pt-2 pb-4 text-lg max-w-lg mt-2 mb-2">
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

        <h1 className="text-4xl max-w-lg font-extrabold justify-center text-center mt-16">
          Fully integrated with your Notion workspace.
        </h1>

         <div className="container md:w-270 w-90 bg-[#f6f5f4] rounded-lg shadow-xl mt-16 ">
          
          <Image className="m-6"
            src="refresh-circle.svg"
            alt="Refresh icon"
            width={30}
            height={30}
            draggable="false"
          />
          

          <h3 className="px-6 pt-6 pb-2 font-extrabold text-2xl mb-0">
            Manage your time and work, together.        
          </h3>
          <p className="px-6 pt-2 pb-4 text-lg max-w-lg ">
          See deadlines and project timelines alongside your calendar events so you know where to focus your efforts.
          </p>

          <Image className="rounded-b-lg"
          src="/notion-db-integration.avif"
          alt="Notion Cal integration picture"
          width={1500}
          height={600}
          draggable="false"
          />

        </div>


        <div className=" container grid md:grid-cols-2 mt-16 gap-4 md:w-270 w-90 flex-1"> 

          <div className="md:max-w-4xl rounded-lg bg-[#f6f5f4] shadow-xl ">
            <Image className="m-6"
              src="/time.svg"
              alt="Time icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 pt-6 pb-2 font-extrabold text-lg mt-2 mb-2">
              Connect and create Notion docs       
            </h3>
            <p className="px-6 pt-2 pb-4 text-lg max-w-lg mt-2 mb-2">
              With info from Notion right in your calendar, you’ll always have full context for every meeting.
            </p>

            <Image
              src="/connect-docs.avif"
              alt="Notion Cal connect docs picture"
              width={500}
              height={300}
              draggable="false"
            />

          </div>

          <div className="rounded-xl bg-[#f6f5f4] w-full h-full shadow-xl">
            <Image className="m-6"
              src="/checkmark-done-circle.svg"
              alt="Checkmark icon"
              width={30}
              height={30}
              draggable="false"
            />

            <h3 className="px-6 pt-6 pb-2 font-extrabold text-lg mt-2 mb-2">
              Update project timelines       
            </h3>
            <p className="px-6 pt-2 pb-4 text-lg max-w-lg mt-2 mb-2">
              Just drag and drop to edit Notion database items without leaving your calendar.
            </p>

            <Image
              src="/time-drag.avif"
              alt="time drag picture"
              width={500}
              height={300}
              draggable="false"
            />
            </div>
          </div>

                  <h1 className="text-4xl font-semibold justify-center text-center mt-16">
          Work and life, playing nice.
        </h1>

        <div className="container md:w-270 w-90 bg-[#f6f5f4] rounded-lg shadow-xl mt-16 ">
          
          <Image className="m-6"
            src="code-working-outline.svg"
            alt="Flash icon"
            width={30}
            height={30}
            draggable="false"
          />

          <h3 className="px-6 pt-6 pb-2 font-extrabold text-2xl mb-0">
            See all your commitments in the same place        
          </h3>
          <p className="px-6 pt-2 pb-4 text-lg max-w-lg mb-0">
          No more accidental conflicts between work and personal events.
          </p>

          <Image className="rounded-b-lg"
          src="/menu-bar.avif"
          alt="Notion Cal menu bar picture"
          width={1500}
          height={600}
          draggable="false"
          />

        </div>

    </main>
  );
}