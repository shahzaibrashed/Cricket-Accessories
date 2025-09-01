import { Clock, MapPin, Phone } from "lucide-react"


const ContactLocation = () => {
  return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Store Locations</h2>
            <p className="text-xl text-gray-600">Visit us at any of our flagship stores</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
             {
  city: 'Karachi',
  address: '45 Shahrah-e-Faisal, PECHS Block 6',
  phone: '+92 300 1234567',
  hours: 'Mon-Sun: 10AM-9PM'
},
{
  city: 'Lahore',
  address: '22 MM Alam Road, Gulberg III',
  phone: '+92 321 2345678',
  hours: 'Mon-Sun: 11AM-8PM'
},
{
  city: 'Islamabad',
  address: '10 Jinnah Avenue, Blue Area',
  phone: '+92 333 3456789',
  hours: 'Mon-Sun: 10AM-8PM'
}

            ].map((store, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">{store.city} Store</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <span className="text-gray-700">{store.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">{store.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">{store.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ContactLocation