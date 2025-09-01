import { Target, Zap } from "lucide-react"


const MissionVission = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower cricket players at every level with premium equipment that enhances 
                performance, ensures safety, and brings joy to the beautiful game of cricket. 
                We believe that the right equipment can transform potential into excellence.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the world's leading cricket equipment brand, recognized for innovation, 
                quality, and our unwavering commitment to the cricket community. We envision 
                a future where every cricket player has access to world-class equipment.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MissionVission