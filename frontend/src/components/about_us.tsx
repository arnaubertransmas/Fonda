import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-fonda-black">
      <div className="hero py-16">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-serif font-bold text-[#471D19]">
              Fonda Safaja
            </h1>
            <p className="py-4 text-lg text-gray-600">
              Un restaurant familiar situat a Sant Quirze de Safaja, on combinem
              hospitalitat, cuina catalana, proximitat i autenticitat.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 max-w-7xl space-y-20">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <p className="text-gray-700 leading-relaxed text-justify flex-1">
              Fer que cada visita a la Fonda Safaja sigui una experiència autèntica que connecti persones a través de la tradició i el sabor de
              la &apos;cuina de la iaia&apos;.
              A la Fonda Safaja, ens esforcem per mantenir viva una cuina que evoca records i emocions. Oferim plats tradicionals, honestos i
              senzills, preparats amb el mateix amor i dedicació que a casa. 
              Més que un restaurant, som un punt de trobada on la calidesa del servei, la proximitat amb els nostres clients i l&apos;entorn natural creen un espai on cada àpat és un motiu per gaudir. 
              La nostra missió és ser el lloc on les històries, els somriures i les connexions personals siguin tan memorables com els sabors de la nostra cuina.
            </p>
          </div>
          <div className="relative min-h-[450px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <Image
              src="/carta.jpg"
              alt="Missió Fonda Safaja"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-1 gap-8 items-stretch">
          <div className="relative min-h-[450px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.65235417884!2d2.1495913174438397!3d41.72802000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4c2a4529d7065%3A0xc7e142aa1b5d12f3!2sFonda%20Safaja!5e0!3m2!1sen!2ses!4v1772033766499!5m2!1sen!2ses" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        
        {/* <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="relative min-h-[450px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <Image
              src="/menjar.jpg"
              alt="Valors Fonda Safaja"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <p className="text-gray-700 leading-relaxed text-justify flex-1">
              Ser el lloc de referència on la tradició i la senzillesa no es perdin, oferint a les futures generacions tradicions que connecten,
              uneixen i creen moments inoblidables.
              Imaginem una Fonda Safaja que manté viu l&apos;esperit de la cuina de sempre, preservant els valors i els sabors que ens defineixen. Volem
              ser el restaurant que passa de generació en generació, on cada visita sigui una oportunitat per descobrir o redescobrir el valor d&apos;allò
              autèntic i senzill. Ens comprometem a continuar oferint un espai on el temps sembla aturar-se, on les persones trobin un lloc per
              connectar, celebrar i gaudir d&apos;allò que realment importa: la proximitat amb els altres i amb el territori.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;