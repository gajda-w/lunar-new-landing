// TODO: Temporary whole page is client side rendered. I need to do separate components for each section
"use client";
// import Image from "next/image";
import {
  Mic2,
  Music2,
  AudioWaveform as Waveform,
  Star,
  Users2,
  Award,
  ChevronRight,
  // Mail,
  Check,
  Plus,
} from "lucide-react";

export default function Home() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519683109079-d5f539e1542f?auto=format&fit=crop&q=80"
            alt="Recording Studio"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Lunar Sound Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Twoja muzyka zasługuje na najlepsze brzmienie. Profesjonalne
            nagrania, miks i mastering w Lunar Sound Studio. Przyjdź, a ja zajmę
            się resztą.
          </p>
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all"
            onClick={scrollToBottom}
          >
            Umów się na nagranie <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Features Section */}
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
                desc: "Nagrywam, miksuję i masteruję tak, żeby Twoja muzyka brzmiała dokładnie tak, jak sobie wymarzyłeś.",
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

      {/* Equipment Gallery */}
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
                image:
                  "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80",
                title: "Neumann U87 Microphone",
                category: "Microphones",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80",
                title: "SSL Mixing Console",
                category: "Consoles",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1607435097405-db48f377bff6?auto=format&fit=crop&q=80",
                title: "Pro Tools HDX System",
                category: "Recording",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80",
                title: "Vintage Outboard Gear",
                category: "Processing",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80",
                title: "Monitoring System",
                category: "Speakers",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80",
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nasze usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-purple-400">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold">Dodatkowe usługi</h3>
              </div>
              <div className="mb-6">
                {/* <div className="text-2xl font-bold text-purple-400 mb-2">
                  $80/hour
                </div>
                <p className="text-gray-400 mb-4">
                  Full production service for solo artists and bands
                </p> */}
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Równanie perkusji akustycznej - 100-150 zł/utwór
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Arrangement assistance
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Basic mixing included
                  </li>
                </ul>
              </div>
              <button
                onClick={scrollToBottom}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                Umów się na nagranie <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-b from-purple-900/40 to-black/40 rounded-2xl p-8 backdrop-blur-sm border-2 border-purple-500 transform scale-105 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-purple-400">
                  <Users2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold">Realizacja nagrań</h3>
              </div>
              <div className="mb-6">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  70zł/h
                </div>
                <p className="text-gray-400 mb-4">
                  Praca w studiu z solowymi artystami jak i całymi zespołami
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Pomoc przy aranżacji
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Profesjonalne nagranie
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Równanie dynamiczne oraz rytmiczne, poszczególnych śladów
                  </li>
                </ul>
              </div>
              <button
                onClick={scrollToBottom}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                Umów się na nagranie <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-purple-400">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold">Mixing & Mastering</h3>
              </div>
              <div className="mb-6">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  od 200zł
                </div>
                <p className="text-gray-400 mb-4">
                  Profesjonalny Mix i Mastering dla Twoich nagrań
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Prosty utwór do gotowego instrumentala - 200zł
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Standardowy zespół perkusja, bas, gitara, wokal od 350 zł
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />3 revision
                    rounds
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Stem mastering available
                  </li>
                </ul>
              </div>
              <button
                onClick={scrollToBottom}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
              >
                Umów się na nagranie <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-t from-black to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Masz pytania?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {`Chcesz dopytać o szczegóły? Śmiało, pisz lub dzwoń – odpowiem na wszystko.`}
          </p>
          {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
            <Mail className="w-5 h-5" /> Contact Us
          </button> */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Email: kontakt.lunar@gmail.com
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tel: 790 524 598
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Addres: ul. Boya-Żeleńskiego 5, 31-105 Rzeszów
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Lunar Sound Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
