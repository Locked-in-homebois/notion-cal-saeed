import Image from 'next/image';

export default function ThirdCompo() {
  return (
    <main className="flex flex-col items-center justify-center ">

      <h1 className="text-4xl font-semibold justify-center text-center mt-16">
        Work and life, playing nice.
      </h1>

      <div className="container md:w-270 w-90 bg-[#f6f5f4] rounded-lg shadow-xl mt-16 ">

        <Image className="m-6"
          src="chevron-collapse.svg"
          alt="chevron collapse icon"
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

      <div className=" container grid md:grid-cols-3 mt-16 gap-4 md:w-300 w-90 flex-1">

        <div className="md:max-w-4xl rounded-lg bg-[#f6f5f4] shadow-xl ">
          <Image className="m-6"
            src="/checkmark-done-circle.svg"
            alt="checkmark done circle icon"
            width={26}
            height={26}
            draggable={false}
          />

          <h3 className="px-6 pt-2 pb-0 font-extrabold text-lg mt-2 mb-2">
            Built-in scheduling
          </h3>
          <p className="px-6 pt-2 pb-4 text-lg max-w-lg mt-2 mb-2">
            Send your availability and scheduling link to let others book time with you. No separate app.
          </p>

        </div>

        <div className="rounded-xl bg-[#f6f5f4] w-full h-full shadow-xl">
          <Image className="m-6"
            src="/hand-left.svg"
            alt="Hand icon"
            width={26}
            height={26}
            draggable={false}
          />

          <h3 className="px-6 pt-2 pb-0 font-extrabold text-lg mt-2 mb-2">
            Work across time zones
          </h3>
          <p className="px-6 pt-2 pb-4 text-lg max-w-lg mt-2 mb-2">
            Thoughtfully collaborate with global teams as you visualize your day across time zones.
          </p>

        </div>

        <div className="rounded-xl bg-[#f6f5f4] w-full h-full shadow-xl">
          <Image className="m-6"
            src="/terminal.svg"
            alt="Terminal icon"
            width={26}
            height={26}
            draggable={false}
          />

          <h3 className="px-6 pt-2 pb-0 font-extrabold text-lg mt-2 mb-2">
            Modern design
          </h3>
          <p className="px-6 pt-2 pb-2 text-m max-w-lg mt-2 mb-2">
            Send your availability and scheduling link to let others book time with you. No separate app.
          </p>

        </div>

      </div>

    </main>
  );
}