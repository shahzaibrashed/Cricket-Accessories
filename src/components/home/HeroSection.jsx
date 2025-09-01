import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              Premium Cricket
              <span className="block text-green-400">Equipment for Champions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Elevate your performance with world-class cricket gear designed for professionals & enthusiasts alike.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-5 ">
          <Link
            to="/products"
            className="relative bg-green-600/90 hover:bg-green-600 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-600/40 backdrop-blur-md group"
          >
            <span className="flex items-center justify-center">
              Shop Now
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
           <Link
            to="/about"
            className="relative bg-white  text-green-900 px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-600/40 backdrop-blur-md group"
          >
            <span className="flex items-center justify-center">
              Learn More
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          
        </div>
          </div>
          <div className="relative ">
            <img
              src="/assets/aboutbanner.webp"
              alt="Cricket team"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
