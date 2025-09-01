import { Award } from "lucide-react"


const Certifications = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
            <p className="text-xl text-gray-600">Recognized excellence in cricket equipment manufacturing</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'ISO 9001 Certified', year: '2020' },
              { name: 'Cricket Equipment Award', year: '2023' },
              { name: 'Safety Standards Certified', year: '2024' },
              { name: 'Innovation Excellence', year: '2024' }
            ].map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Certifications