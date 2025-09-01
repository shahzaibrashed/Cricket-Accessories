import { Award, Globe, Heart, Users } from "lucide-react"


const Values = () => {
  return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Excellence',
                description: 'We never compromise on quality. Every product meets our strict standards.'
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Passion',
                description: 'Cricket is more than a game to us. It\'s our passion and our purpose.'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Community',
                description: 'We support cricket communities worldwide and give back to the sport we love.'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Innovation',
                description: 'We constantly seek new ways to improve equipment and enhance performance.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Values