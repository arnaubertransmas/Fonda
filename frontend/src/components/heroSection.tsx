import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 py-12">
        <div className="hero-content flex-col lg:flex-row items-start gap-8">
          <div className="w-3/4 lg:w-1/3">
            <Image
              src="/entrada.jpg"
              alt="Fonda Safaja"
              width={700} 
              height={600}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 pt-0 lg:pt-4">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              &quot;Ei, ens pots trobar a la Fonda Safaja, a casa. On cuinem.&quot;
              <span className="block mt-2 not-italic text-[#471D19] font-medium">
                — Imma Vila i Joan Valldaura, xefs principals
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-[#f5f1e8] py-12">
        <div className="hero-content flex-col lg:flex-row-reverse items-start gap-8">
          <div className="w-3/4 lg:w-1/3">
            <Image
              src="/decoracio.jpg"
              alt="Fonda Safaja"
              width={700} 
              height={600}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 pt-0 lg:pt-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              El nostre pati és obert! Les visites sempre són benvingudes. 
              <span className="block mt-2 text-[#471D19]">
                Vine a gaudir d&apos;un espai on el temps s&apos;atura i la tradició pren vida.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 py-12">
        <div className="hero-content flex-col lg:flex-row items-start gap-8">
          <div className="w-3/4 lg:w-1/3">
            <Image
              src="/deco.jpg"
              alt="Fonda Safaja"
              width={700} 
              height={600}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-2/3 pt-0 lg:pt-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada racó de la Fonda guarda una història, cada plat evoca un record.
              <span className="block mt-2 text-[#471D19] font-medium">
                Descobreix l&apos;autèntica cuina de la iaia en un entorn que connecta passat i present.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;