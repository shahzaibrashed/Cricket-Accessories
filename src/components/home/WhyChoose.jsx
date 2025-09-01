import { Award, Shield, Star, Truck } from "lucide-react"


const WhyChoose = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CricketPro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class cricket equipment with unmatched quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Premium Quality',
                description: 'Hand-selected equipment from the finest materials'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Safety First',
                description: 'All protective gear meets international safety standards'
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'Fast Delivery',
                description: 'Quick and secure shipping to your doorstep'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Expert Support',
                description: '24/7 customer support from cricket enthusiasts'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-green-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhyChoose