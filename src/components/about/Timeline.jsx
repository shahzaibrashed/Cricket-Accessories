import { Calendar } from "lucide-react"


const Timeline = () => {
  return (
     <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Four decades of cricket excellence</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            
            <div className="space-y-12">
              {[
                { year: '1985', title: 'Company Founded', description: 'Started as a small cricket bat workshop in Mumbai' },
                { year: '1995', title: 'First International Order', description: 'Expanded to serve cricket teams across Asia' },
                { year: '2005', title: 'Global Expansion', description: 'Opened offices in Australia and England' },
                { year: '2015', title: 'Digital Revolution', description: 'Launched our e-commerce platform' },
                { year: '2025', title: 'Innovation Leader', description: 'Leading the industry with smart cricket equipment' }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-green-600 font-bold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Timeline