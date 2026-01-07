import React from "react";
import Image from "next/image";

const Allotjament = () => {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-fonda-black">

      {/* HERO IMAGE */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="/rebranding.jpg"
          alt="Allotjaments"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto p-10 mt-3">
        <h1 className="text-4xl font-bold text-center mb-6">
            Dormir bé per estar bé
        </h1>

        <p className="mb-8">
            Còmodes, netes i tranquil·les. Aquests tres adjectius definirien les nostres habitacions. 
            La Fonda té actualment 5 habitacions dobles (amb possibilitat de afegir llits supletoris), 
            totes amb bany complet i calefacció. També hi ha un espai d’esbarjo comú equipat amb taules, 
            cadires i televisió destinat a passar l’estona jugant a cartes, mirant el programa preferit 
            o compartint amb les anècdotes del dia els amics.
        </p>

        <h4 className="text-xl font-medium text-center">
            Truca’ns per fer una reserva i et recomanarem el millor per a tu!
        </h4>

      </div>
    </div>
  );
};

export default Allotjament;
