

const OurStory = () => {
  return (
    <>
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cricket workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded by former professional cricketers, CricketPro began as a small workshop 
                crafting custom cricket bats. Our founders understood that quality equipment 
                could make the difference between a good player and a great one.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, we've grown into a global brand, but our commitment remains unchanged: 
                to provide cricket enthusiasts with the finest equipment available. Every product 
                is carefully selected and tested by our team of cricket experts.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're a weekend warrior or a professional player, we have the gear 
                to help you perform at your best.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStory