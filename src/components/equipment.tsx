import Eq1 from "../assets/eq1.jpeg";
import Eq2 from "../assets/eq2.jpeg";
import Eq3 from "../assets/eq3.jpeg";
import Eq4 from "../assets/eq4.jpeg";
import Eq5 from "../assets/eq5.jpeg";
// import Eq6 from "../assets/eq6.jpeg";

export const Equipment = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Sprzęt, który robi robotę
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          {`Topowe mikrofony, preampy, odpowiednia akustyka pomieszczenia oraz fachowa realizacja – wszystko po to, żeby nagranie było dopracowane w najmniejszym szczególe.`}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-purple-400 text-sm mb-2">
                    {item.category}
                  </div>
                  {item.items.map((item, index) => (
                    <h3 key={index} className=" font-semibold mb-2">
                      {item}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const equipment = [
  {
    image: Eq1.src,
    items: [
      "Royer R121 x2",
      "Akg c414 XLS x2",
      "Akg c451b",
      "Shure Beta 52a",
      "Shure SM57",
      "Shure Sm7b",
      "Beyerdynamic i51",
    ],
    category: "Mikrofony",
  },
  {
    image: Eq2.src,
    items: [
      "Konwerter AD/DA",
      "Universal Audio Apollo",
      "Neve1073lb",
      "Chandler TG2",
      "UAD Apollo",
      "Focusrite Clarett",
    ],
    category: "Preampy",
  },
  {
    image: Eq3.src,
    items: [
      "Zestaw perkusyjny Tama Starclassic Maple 22/10/12/16",
      "Vintage Ludwig Supraphonic 14x5",
      "Fat Flying Drums",
      "Talerze Meinl Byzance",
      "Engl Ritchie Blackmore",
    ],
    category: "Instrumenty",
  },
  {
    image: Eq4.src,
    items: ["Beyerdynamic DT770", "Pro 250 ohm", "Behringer p16"],
    category: "System odsłuchowy",
  },
  {
    image: Eq5.src,
    items: [
      "Cubase 12.5 Pro",
      "Slate Digital",
      "Waves",
      "Plugin Alliance",
      "Neural DSP",
    ],
    category: "Software",
  },
];
