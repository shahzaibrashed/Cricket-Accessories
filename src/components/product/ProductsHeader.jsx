import { Search, ShoppingBag } from "lucide-react";



export default function ProductsHeader({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative h-[75vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/newsbanner.jpg" 
        alt="Cricket Ground"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-3xl md:text-7xl font-extrabold mb-4 flex items-center justify-center gap-3">
          Cricket <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Equipment</span> Store
        </h1>

        <p className="text-lg md:text-3xl text-gray-200 mb-8 flex items-center justify-center gap-2">
          <ShoppingBag className="w-6 h-6 text-green-500" />
          Premium gear for every level of play
        </p>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto relative group">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 w-6 h-6" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full  px-5 py-4 rounded-2xl text-gray-900 
                       focus:ring-4 focus:ring-green-300 focus:outline-none
                       bg-white/90 backdrop-blur-md shadow-lg
                       transition-all duration-300 group-hover:shadow-green-500/40"
          />
        </div>
      </div>
    </div>
  );
}
