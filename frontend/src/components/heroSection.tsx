import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-3/4 lg:w-1/4">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Scenic stock photo"
              width={400} 
              height={300}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>

          <div className="w-full lg:w-3/4 p-6">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-3/4 lg:w-1/4">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Scenic stock photo"
              width={400} 
              height={300}
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>

          <div className="w-full lg:w-3/4 p-6">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
