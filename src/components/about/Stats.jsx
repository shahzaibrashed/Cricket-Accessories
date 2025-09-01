

const Stats = () => {
  return (
       <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '50,000+', label: 'Happy Customers' },
              { number: '1,000+', label: 'Products Sold' },
              { number: '40+', label: 'Countries Served' },
              { number: '39', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Stats