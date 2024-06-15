
import Image from "next/image";
import Link from "next/link";






export default function Home() {
  


  return (
    <main className="flex items-center justify-center flex-col">
      {/* navbar */}
      
      {/* hero section */}
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
            
            <Link href="/dashboard">
              <h2 className="bg-[#D0F6FF] text-[#00334C] rounded-full w-[85%] text-center font-bold h-16 mt-9 text-2xl flex 
              mr-24  items-center justify-center">Get Started !</h2>
            </Link>
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
      {/* steps in the website */}
      <section className="bg-[#D0F6FF] w-full rounded-xl">
        <h2 className="text-center text-[#21B7E2] mt-10 text-3xl">How it Works</h2>
        <h2 className="text-center text-[#263238] mt-9 text-6xl"> Get it done in 4 steps</h2>
        <div className=" flex justify-evenly mt-12 ">
          <div className="bg-white text-center mb-14 rounded-2xl h-96">
            <h2 className="text-2xl text-[#21B7E2] mt-8 ">Step 1</h2>
            <h2 className="mt-6 text-[#263238] text-4xl">Orders</h2>
            <Image src='/step1.svg' alt="step1" height={220} width={220} className="mt-4"/>
          </div>
          <div className="bg-white text-center mb-14 rounded-2xl h-96">
            <h2 className="text-2xl text-[#21B7E2] mt-8 ">Step 2</h2>
            <h2 className="mt-6 text-[#263238] text-4xl">Wash & Dry</h2>
            <Image src='/step2.svg' alt="step2" height={220} width={220} className="-mt-12"/>
          </div>
          <div className="bg-white text-center mb-14 rounded-2xl h-96">
            <h2 className="text-2xl text-[#21B7E2] mt-8 ">Step 3</h2>
            <h2 className="mt-6 text-[#263238] text-4xl">Fold</h2>
            <Image src='/step3.svg' alt="step3" height={220} width={220} className="-mt-10"/>
          </div>
          <div className="bg-white text-center mb-14 rounded-2xl h-96">
            <h2 className="text-2xl text-[#21B7E2] mt-8 ">Step 4</h2>
            <h2 className="mt-6 text-[#263238] text-4xl">Delivery</h2>
            <Image src='/step4.svg' alt="step1" height={220} width={220} className="mt-4"/>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="grid grid-cols-2">
          <div className="grid-cols-1">
          <h2 className="text-9xl">Wash & Fold</h2>
          </div>
          <div>
            <h2>hbdvdvnfdjvndjvn</h2>
          </div>

        </div>

      </section> */}
      
    </main>
  );
}
