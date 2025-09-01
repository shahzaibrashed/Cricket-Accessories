

const ContactHero = () => {
  return (
        <section className="relative h-[75vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/newsbanner.jpg" 
        alt="Get In Touch"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-3xl md:text-7xl font-extrabold mb-6">
          Get{" "}
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            In Touch
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-6">
          Have questions about our products or need expert advice?
        </p>

        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Our cricket specialists are here to help you choose the right gear, answer your queries, 
          and guide you to make the best decision for your game.
        </p>

     
      </div>
    </section>
  )
}

export default ContactHero