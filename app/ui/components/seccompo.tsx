import Image from 'next/image';

export default function SecCompo() {
  return (
    <main className="flex flex-col items-center justify-center ">
              <main className="flex flex-col items-center justify-center ">
        
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
        </main>
    </main>
  );
}