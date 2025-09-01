import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section
      className="py-24 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/01/98/57/21/360_F_198572137_ZaaT2TEs02uOJMVdRLF9447bdjPeln8B.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-white/80 text-lg">
            Trusted by players, captains, and coaches worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Rajesh Kumar",
              role: "Club Captain",
              content:
                "Outstanding quality equipment. The bat I purchased has perfect balance and has significantly improved my batting average.",
              rating: 5,
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sarah Johnson",
              role: "Professional Player",
              content:
                "CricketPro provides the best protective gear. I feel confident and safe on the field with their helmets and pads.",
              rating: 5,
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Mike Chen",
              role: "Cricket Coach",
              content:
                "Excellent customer service and fast delivery. I regularly order equipment for my team and they never disappoint.",
              rating: 5,
              image: "https://randomuser.me/api/portraits/men/77.jpg",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl 
              hover:shadow-green-500/40 hover:-translate-y-2 transition-all duration-300 border border-green-500/20"
            >
              {/* Top Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-green-500 shadow-md"
                  />
                  <span className="absolute inset-0 rounded-full ring-2 ring-green-400 animate-pulse"></span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
