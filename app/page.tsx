import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center pt-24 pb-12 p-4 text-center">
      <div className="mx-auto w-40 h-24 mb-2">
        <Image
          src="/notion-img.png"
          alt="Notion Cal main picture"
          width={170}
          height={170}
        />
        <div>
        <h1 className="text-6xl balance-text font-bold mb-4">Its time.</h1>
        </div>
      </div>
    </main>
  );
}