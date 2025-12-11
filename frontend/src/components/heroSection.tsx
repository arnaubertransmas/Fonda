import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero bg-[#f5f1e8] mt-12">
        <div className="hero-content flex-col lg:flex-row items-center gap-8">
          <div className="w-2/4 md:w-1/4">
              <Image
                src="/peus.jpg"
                alt="Fonda Safaja"
                width={700}
                height={600}
                className="w-full rounded-lg shadow-2xl object-cover"
              />
          </div>
          <div className="w-full lg:w-2/3 flex items-center">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              &quot;Ei, ens pots trobar a la Fonda Safaja, a casa. On cuinem.&quot;
              <span className="block mt-2 not-italic text-[#471D19] font-medium">
                — Imma Vila i Joan Valldaura, xefs principals
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-[#f5f1e8]">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
          <div className="w-2/4 md:w-1/4">
            <Image
              src="/cuina.jpg"
              alt="Fonda Safaja"
              width={700}
              height={600}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 flex items-center">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              Cada racó de la Fonda guarda una història, cada plat evoca un record.
              <span className="block mt-2 text-[#471D19] font-medium">
                Descobreix l&apos;autèntica cuina de la iaia en un entorn que connecta passat i present.
              </span>
            </p>
          </div>
          
        </div>
      </div>

      <div className="hero bg-[#f5f1e8] mb-10">
        <div className="hero-content flex-col lg:flex-row items-center gap-8">
          <div className="w-2/4 md:w-1/4">
            <Image
              src="/ambien2.jpg"
              alt="Fonda Safaja"
              width={700} 
              height={600}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 flex items-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              El nostre pati és obert! Les visites sempre són benvingudes. 
              <span className="block mt-2 text-[#471D19] font-medium">
                Vine a gaudir d&apos;un espai on el temps s&apos;atura i la tradició pren vida.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;