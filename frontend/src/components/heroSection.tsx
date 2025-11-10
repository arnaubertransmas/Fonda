import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-3/4 lg:w-1/4">
            <Image
              src="/entrada.jpg"
              alt="Fonda Safaja"
              width={700} 
              height={600}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>

          <div className="w-full lg:w-3/4 p-6">
            <p className="py-6">
              &quot;Ei, ens pots trobar a la Fonda Safaja, a casa. On cuinem.&quot;
              — Imma Vila i Joan Valldaura, xefs principals.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-3/4 lg:w-1/4">
            <Image
              src="/decoracio.jpg"
              alt="Fonda Safaja"
              width={700} 
              height={600}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>

          <div className="w-full lg:w-3/4">
            <p className="py-6">
              El nostre pati és obert!
              Les visites sempre són benvingudes.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
