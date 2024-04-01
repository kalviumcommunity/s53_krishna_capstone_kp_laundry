

import Image from "next/image";
import Header from "./_components/Header"




export default function Home() {
  


  return (
    <main className="flex items-center justify-center flex-col">
      <Header/>
      <section className=" h-screen w-full mt-16  rounded-md  !overflow-visible relative grid grid-cols-2  place-items-center">
        <div>
          <div className="flex flex-col  items-center">
            <h2 className="bg-[#D0F6FF] rounded-3xl w-96 text-center font-bold ">20% off on first month subscription</h2>
            <h2 className="mt-5 text-7xl text-[#00334C] grandstander">
              Laundry today or <br /> naked tomorrow.
            </h2>
            <h2 className="text-[#00334C] mt-10 text-start items-start text-[20px]">
              KP Laundry service will wash, dry, and fold your laundry at an
              <br />
              affordable price. Pickup and drop-off options available!
            </h2>
            
            <h2 className="bg-[#D0F6FF] rounded-full w-[85%] text-center font-bold h-16 mt-9 text-2xl flex 
            mr-24  items-center justify-center"> How it works</h2>
          </div>

        </div>
        <div className="grid-cols-1 grid-row-end">
        <Image
          src="/hero.svg"
          width={480}
          height={480}
          alt="hero"
          className="ml-64"
          
        />
        </div>
      </section>
      
    </main>
  );
}
