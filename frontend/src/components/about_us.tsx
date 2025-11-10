import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-fonda-beige text-fonda-black">
      <div className="hero py-16">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-serif font-bold text-fonda-wine">Fonda Safaja</h1>
            <p className="py-4 text-lg text-gray-600">
              Un restaurant familiar situat a Sant Quirze de Safaja, on combinem
              hospitalitat, cuina catalana, proximitat i autenticitat.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 grid gap-8 md:grid-cols-2">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-fonda-wine mb-3">Missió</h2>
            <p>
                Fer que cada visita a la Fonda Safaja sigui una experiència autèntica que connecti persones a través de la tradició i el sabor de
                la &apos;cuina de la iaia&apos;.
                A la Fonda Safaja, ens esforcem per mantenir viva una cuina que evoca records i emocions. Oferim plats tradicionals, honestos i
                senzills, preparats amb el mateix amor i dedicació que a casa. 
                Més que un restaurant, som un punt de trobada on la calidesa del servei, la proximitat amb els nostres clients i l&apos;entorn natural creen un espai on cada àpat és un motiu per gaudir. 
                La nostra missió és ser el lloc on les històries, els somriures i les connexions personals siguin tan memorables com els sabors de la nostra cuina.
              </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-fonda-wine mb-3">Valors</h2>
            <p>
              Ser el lloc de referència on la tradició i la senzillesa no es perdin, oferint a les futures generacions tradicions que connecten,
              uneixen i creen moments inoblidables.
              Imaginem una Fonda Safaja que manté viu l’esperit de la cuina de sempre, preservant els valors i els sabors que ens defineixen. Volem
              ser el restaurant que passa de generació en generació, on cada visita sigui una oportunitat per descobrir o redescobrir el valor d’allò
              autèntic i senzill. Ens comprometem a continuar oferint un espai on el temps sembla aturar-se, on les persones trobin un lloc per
              connectar, celebrar i gaudir d’allò que realment importa: la proximitat amb els altres i amb el territori.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
