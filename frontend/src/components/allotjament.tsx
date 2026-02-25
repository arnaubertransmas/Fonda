import React from "react";
import Image from "next/image";
import Link from "next/link";

const Allotjament = () => {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-fonda-black">

      <div className="relative w-full h-[70vh]">
        <video
          src="/57.mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        />
        {/* <Image
          src="/rebranding.jpg"
          alt="Allotjaments"
          fill
          className="object-cover"
          priority
        /> */}
      </div>

      <div className="max-w-4xl mx-auto p-10 mt-3">
        <h1 className="text-5xl font-serif font-bold text-[#471D19] text-center mb-5">
          Un descans senzill, tranquil i ben cuidat
        </h1>

        <p className="py-4 text-lg text-gray-600">
          Les habitacions de la Fonda Safaja estan pensades per baixar el ritme
          i descansar com toca: espais comodes, tranquils i cuidats al detall,
          ideals per desconnectar i recuperar energia. Disposem de 5 habitacions.
          Truca&apos;ns i t&apos;explicarem disponibilitat, opcions i la millor
          proposta segons el teu pla.
        </p>
        

        <div className="flex justify-center mt-4">
          <Link
            href="tel:+34938660252"
            className="btn text-black border-black"
            style={{ backgroundColor: "transparent" }}
          >
            Reserva
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Allotjament;