export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-black to-purple-900/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Masz pytania?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          {`Chcesz dopytać o szczegóły? Śmiało, pisz lub dzwoń – odpowiem na wszystko.`}
        </p>
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
  );
};
