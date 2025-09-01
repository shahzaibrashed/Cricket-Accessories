import { Globe, Headphones, MessageCircle } from "lucide-react"


const ContactMethod = () => {
  return (
   <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">Choose the method that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: 'Live Chat',
                description: 'Get instant help from our cricket experts',
                action: 'Start Chat',
                color: 'green'
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: 'Phone Support',
                description: 'Speak directly  our customer service team',
                action: 'Call Now',
                color: 'green'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Online Support',
                description: 'Browse our comprehensive help center',
                action: 'Visit Help Center',
                color: 'green'
              }
            ].map((method, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${method.color}-100 rounded-full mb-6`}>
                  <div className={`text-${method.color}-600`}>{method.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <button className={`bg-${method.color}-600 hover:bg-${method.color}-700 text-white px-6 py-3 rounded-lg font-medium transition-colors`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ContactMethod