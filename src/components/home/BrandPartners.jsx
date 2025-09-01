import { Trophy, Star, Shield, Flame, Zap, Crown, Globe, Target } from "lucide-react";

const BrandPartners = () => {
  return (
  <section className="py-20 bg-gray-50 border-t border-b">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative inline-block">
        Trusted by <span className="text-green-600">Champions</span>
        <span className="block w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto mt-3 rounded-full"></span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Proud equipment partner for elite cricket teams and organizations worldwide
      </p>
    </div>

    {/* Brands Auto-scroll */}
    <div className="overflow-hidden relative">
      <div className="flex items-center gap-10 animate-scroll">
        {[
          { name: "Team Alpha", icon: <Shield className="w-8 h-8 text-green-600" /> },
          { name: "Cricket Stars", icon: <Star className="w-8 h-8 text-yellow-500" /> },
          { name: "Pro League", icon: <Trophy className="w-8 h-8 text-amber-600" /> },
          { name: "Champions XI", icon: <Flame className="w-8 h-8 text-red-500" /> },
          { name: "Elite Cricket", icon: <Zap className="w-8 h-8 text-blue-500" /> },
          { name: "Victory Club", icon: <Crown className="w-8 h-8 text-purple-600" /> },
          { name: "Legends United", icon: <Globe className="w-8 h-8 text-emerald-600" /> },
          { name: "Power Hitters", icon: <Target className="w-8 h-8 text-orange-500" /> },
        ].map((brand, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center px-6 py-5 min-w-[180px] border border-gray-100"
          >
            <div className="mb-3">{brand.icon}</div>
            <span className="text-gray-700 font-semibold">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Animation keyframes */}
  <style>
    {`
      @keyframes scroll {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll {
        animation: scroll 22s linear infinite;
        width: max-content;
      }
    `}
  </style>
</section>
  )
}

export default BrandPartners