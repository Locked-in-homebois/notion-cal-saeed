import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 sm:p-12">
      <div className="relative w-full h-64 md:w-3/4 md:h-96">
        <Image
          src="/notion-cal-main.png"
          alt="Notion Cal main picture"
          width={1200}
          height={600}
        />
      </div>
    </main>
  );
}