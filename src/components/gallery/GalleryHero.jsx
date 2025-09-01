import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GalleryHero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/newsbanner.jpg" 
        alt="Cricket Gallery"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-3xl md:text-7xl font-extrabold mb-6">
          Cricket{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Gallery
          </span>
        </h1>

     

        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          From legendary players in action to the latest equipment showcases, our gallery is a hub for cricket lovers 
          to relive memories and explore the spirit of the game.
        </p>
         <div className="flex flex-col sm:flex-row gap-6 justify-center mt-5">
          <Link
            to="/products"
            className="relative bg-green-600/90 hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-600/40 backdrop-blur-md group"
          >
            <span className="flex items-center justify-center">
              Shop Now
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
