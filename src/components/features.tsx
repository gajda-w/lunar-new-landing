import { Mic2, Music2, AudioWaveform as Waveform } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Dlaczego Lunar Sound Studio?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mic2 className="w-8 h-8" />,
              title: "Brzmienie, jakiego szukasz",
              desc: "Nagrywam, miksuję i masteruję, żeby Twoja muzyka brzmiała dokładnie tak, jak sobie wymarzyłeś.",
            },
            {
              icon: <Music2 className="w-8 h-8" />,
              title: "Dla wokalistów, zespołów i nie tylko",
              desc: "Śpiewasz? Grasz w zespole? A może uczysz śpiewu i chcesz nagrać swoich uczniów? W studiu znajdziesz wszystko, czego potrzebujesz.",
            },
            {
              icon: <Waveform className="w-8 h-8" />,
              title: "Każdy instrument na swoim miejscu",
              desc: "Jeśli nagrywacie jako zespół, dopilnuję, żeby każdy instrument brzmiał czysto i profesjonalnie – od perkusji aż po sam wokal.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
