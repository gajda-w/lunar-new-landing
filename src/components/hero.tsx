"use client";
import { ChevronRight } from "lucide-react";
import { scrollToBottom } from "@/lib/utils";

export const Hero = () => {
  return (
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
          Twoja muzyka zasługuje na najlepsze brzmienie. Profesjonalne nagrania,
          miks i mastering w Lunar Sound Studio. Przyjdź, a ja zajmę się resztą.
        </p>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto transition-all"
          onClick={scrollToBottom}
        >
          Umów się na nagranie <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
