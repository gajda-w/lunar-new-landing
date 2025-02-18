// import Image from "next/image";
import {
  Mic2,
  Music2,
  AudioWaveform as Waveform,
  Star,
  Users2,
  Award,
  ChevronRight,
  Mail,
  Check,
  Plus,
} from "lucide-react";

export default function Home() {
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
            Where cosmic creativity meets professional sound engineering
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all">
            Book a Session <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Studio Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic2 className="w-8 h-8" />,
                title: "Pro Equipment",
                desc: "Industry-standard microphones and preamps",
              },
              {
                icon: <Music2 className="w-8 h-8" />,
                title: "Acoustic Design",
                desc: "Perfectly tuned recording spaces",
              },
              {
                icon: <Waveform className="w-8 h-8" />,
                title: "Modern DAWs",
                desc: "Latest recording and mixing software",
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
          <h2 className="text-4xl font-bold text-center mb-6">Our Equipment</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            {`We've carefully curated our gear collection to provide you with the
            best possible sound quality`}
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
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-purple-400">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold">Music Production</h3>
              </div>
              <div className="mb-6">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  $80/hour
                </div>
                <p className="text-gray-400 mb-4">
                  Full production service for solo artists and bands
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Professional recording
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
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                Book Session <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-gradient-to-b from-purple-900/40 to-black/40 rounded-2xl p-8 backdrop-blur-sm border-2 border-purple-500 transform scale-105 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-purple-400">
                  <Users2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold">Band Recording</h3>
              </div>
              <div className="mb-6">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  $120/hour
                </div>
                <p className="text-gray-400 mb-4">
                  Complete band recording package
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Multi-track recording
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Live room + isolation
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Professional mixing
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />2 revision
                    rounds
                  </li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                Book Session <ChevronRight className="w-4 h-4" />
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
                  From $300/track
                </div>
                <p className="text-gray-400 mb-4">
                  Professional mixing and mastering services
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Professional mixing
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <Check className="w-4 h-4 text-purple-400" />
                    Mastering for all formats
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
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                Book Session <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-t from-black to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Create?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {`Let's bring your musical vision to life. Contact us to schedule a
            studio tour or book your session.`}
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
            <Mail className="w-5 h-5" /> Contact Us
          </button>
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
