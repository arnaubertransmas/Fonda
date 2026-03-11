import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapsLink, TrucarLink } from "@/utils/links";

const Hero = () => {
  return (
    <>
      <div className="hero bg-[#f5f1e8] mt-12">
        <div className="hero-content flex-col lg:flex-row items-center gap-8">
          <div className="w-2/4 md:w-1/4">
              <Image
                src="/menjar.jpg"
                alt="Fonda Safaja"
                width={700}
                height={600}
                className="w-full rounded-lg object-cover"
              />
          </div>
          <div className="w-full lg:w-2/3 flex items-start flex-col">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              &quot;A la taula i al llit, al primer crit!&quot;
            </p>
            <TrucarLink 
              className="btn text-black border-black mt-4" 
              style={{ backgroundColor: "transparent" }} 
              text="Reserva"
            />
          </div>
        </div>
      </div>

      <div className="hero bg-[#f5f1e8]">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <div className="w-2/4 md:w-1/4">
            <Image
              src="/terrassa_logo.jpg"
              alt="Fonda Safaja"
              width={700}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col items-end mr-5">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              Preservem l’esperit de sempre perquè cada generació s’hi trobi com a casa
            </p>
            <MapsLink 
              className="btn text-black border-black mt-4" 
              style={{ backgroundColor: "transparent" }}
              text="Troba&apos;ns"
            />
          </div>
          
        </div>
      </div>

      <div className="hero bg-[#f5f1e8] mb-10">
        <div className="hero-content flex-col lg:flex-row items-center gap-8">
          <div className="w-2/4 md:w-1/4">
            <Image
              src="/pol_demanant.jpg"
              alt="Fonda Safaja"
              width={700} 
              height={600}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col items-start">
            <p className="text-lg text-gray-700 leading-relaxed">
              Un espai per gaudir sense presses: cuina de records, tracte proper i connexions reals.       
            </p>
             <Link
              href="about_us"
              className="btn text-black border-black mt-4"
              style={{ backgroundColor: "transparent" }}
            >
             Conèixe&apos;ns
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;