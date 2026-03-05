import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-fonda-black">
      <div className="hero py-8">
        <div className="hero-content flex-col text-center">
          <div className="relative h-48 w-[500px] mx-auto">
            <Image 
              src="/logoVermell.png"
              alt="Fonda Safaja"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-lg text-gray-600 max-w-xl">
            Un restaurant familiar situat a Sant Quirze de Safaja, on combinem
            hospitalitat, cuina catalana, proximitat i autenticitat.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 max-w-7xl space-y-20">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white/90 backdrop-blur-sm p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
            <p className="text-gray-700 leading-relaxed text-justify">
              Fer que cada visita a la Fonda Safaja sigui una experiència autèntica que connecti persones a través de la tradició i el sabor de
              la &apos;cuina de la iaia&apos;.
              A la Fonda Safaja, ens esforcem per mantenir viva una cuina que evoca records i emocions. Oferim plats tradicionals, honestos i
              senzills, preparats amb el mateix amor i dedicació que a casa. 
              Més que un restaurant, som un punt de trobada on la calidesa del servei, la proximitat amb els nostres clients i l&apos;entorn natural creen un espai on cada àpat és un motiu per gaudir. 
              La nostra missió és ser el lloc on les històries, els somriures i les connexions personals siguin tan memorables com els sabors de la nostra cuina.
            </p>
          </div>
        <div className="relative w-full aspect-[4/3] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <Image
            src="/entrada.jpg"
            alt="Missió Fonda Safaja"
            fill
            className="object-cover scale-100 object-center"
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
      </div>
    </div>
  );
};

export default AboutUs;