import { Plus } from "lucide-react";
import Eq1 from "../assets/eq1.jpeg";
import Eq2 from "../assets/eq2.jpeg";
import Eq3 from "../assets/eq3.jpeg";
import Eq4 from "../assets/eq4.jpeg";
import Eq5 from "../assets/eq5.jpeg";

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
          {[
            {
              image: Eq1.src,
              title: "Neumann U87 Microphone",
              category: "Microphones",
            },
            {
              image: Eq2.src,
              title: "SSL Mixing Console",
              category: "Consoles",
            },
            {
              image: Eq3.src,
              title: "Pro Tools HDX System",
              category: "Recording",
            },
            {
              image: Eq4.src,
              title: "Vintage Outboard Gear",
              category: "Processing",
            },
            {
              image: Eq5.src,
              title: "Monitoring System",
              category: "Speakers",
            },
            {
              image: Eq1.src,
              title: "Instrument Collection",
              category: "Instruments",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-purple-400 text-sm mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <button className="text-white/80 hover:text-white flex items-center gap-2 text-sm">
                    View Details <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
