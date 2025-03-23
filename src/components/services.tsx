"use client";
import { Star, Users2, Award, ChevronRight, Check } from "lucide-react";
import { scrollToBottom } from "@/lib/utils";

export const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nasze usługi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <Check className="min-w-4 min-h-4 text-purple-400" />
                  Prosty utwór do gotowego instrumentala - 200zł
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="min-w-4 min-h-4 text-purple-400" />
                  Standardowy zespół perkusja, bas, gitara, wokal od 350 zł
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
                  <Check className="min-w-4 h-4 text-purple-400" />
                  Pomoc przy aranżacji
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="min-w-4 h-4 text-purple-400" />
                  Profesjonalne nagranie
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="min-w-4 h-4 text-purple-400" />
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
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold">Dodatkowe usługi</h3>
            </div>
            <div className="mb-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="min-w-4 h-4 text-purple-400" />
                  Równanie perkusji akustycznej - 100-150 zł/utwór
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-purple-400" />
                  Arrangement assistance
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="min-w-4 h-4 text-purple-400" />
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
        </div>
      </div>
    </section>
  );
};
