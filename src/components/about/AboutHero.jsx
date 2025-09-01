import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"


const AboutHero = () => {
  return (
     <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="/assets/newsbanner.jpg" 
        alt="Get In Touch"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-7xl font-extrabold mb-8 space-y-2 leading-tight">
          <span className="block animate-fade-down opacity-0">
            Passionate About Cricket
          </span>
          <span className="block animate-fade-down opacity-0 delay-300">
            <span className="text-green-500">Since 1975</span> 
          </span>
        </h1>

        <p className="text-lg md:text-2xl mb-10 text-gray-300 animate-fade-up opacity-0 delay-500">
        For over three decades, CricketPro has been the trusted name in cricket equipment. 
        We understand the game because we live and breathe cricket.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up opacity-0 delay-700">
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

      {/* Animations inline */}
      <style>
        {`
          @layer utilities {
            @keyframes fade-down {
              0% { opacity: 0; transform: translateY(-20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes fade-up {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-down {
              animation: fade-down 0.8s ease-out forwards;
            }
            .animate-fade-up {
              animation: fade-up 0.8s ease-out forwards;
            }
            .delay-300 { animation-delay: 0.3s; }
            .delay-500 { animation-delay: 0.5s; }
            .delay-700 { animation-delay: 0.7s; }
          }
        `}
      </style>
    </section>
  )
}

export default AboutHero