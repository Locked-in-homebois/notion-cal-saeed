import Image from 'next/image';

export default function ThirdCompo() {
    return (
              <main className="flex flex-col items-center justify-center ">
        
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