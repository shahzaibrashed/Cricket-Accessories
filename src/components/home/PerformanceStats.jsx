import { Award, TrendingUp, Trophy, Users } from 'lucide-react'

const PerformanceStats = () => {
  return (
    <section className="py-20  text-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance That Speaks</h2>
            <p className="text-xl text-gray-700">Numbers that showcase our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, number: '98%', label: 'Customer Satisfaction' },
              { icon: <Users className="w-8 h-8" />, number: '50K+', label: 'Active Players' },
              { icon: <Trophy className="w-8 h-8" />, number: '200+', label: 'Tournaments Won' },
              { icon: <Award className="w-8 h-8" />, number: '15+', label: 'Industry Awards' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-green-400 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PerformanceStats