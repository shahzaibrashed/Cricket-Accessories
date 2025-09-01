import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const LatestNews = () => {
  const newsArticles = [
    {
      title: 'ICC Announces Record Prize Money for Women’s World Cup 2025',
      excerpt: 'A historic four-fold prize money hike sets a new milestone in cricket equity.',
      date: 'September 01, 2025',
      to: '/news',
      image: '/assets/13.webp'
    },
    {
      title: 'Asia Cup 2025: India vs Pakistan on Sept 14 in UAE',
      excerpt: 'The high-voltage clash between rivals set to ignite the Asia Cup in the UAE.',
      date: 'September 02, 2025',
      to: '/news',
      image: '/assets/14.webp'
    },
    {
      title: 'Jamie Overton Takes Indefinite Break from Red-Ball Cricket',
      excerpt: 'The England all-rounder diverts focus to white-ball format amid workload concerns.',
      date: 'September 01, 2025',
      to: '/news',
      image: '/assets/15.webp'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Cricket News
          </h2>
          <p className="text-xl text-gray-600">Stay updated with the cricket world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <p className="text-sm text-green-600 mb-2">{article.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-gray-600 ">{article.excerpt}</p>
                </div>
                <Link
                  to={article.to}
                  className="mt-auto text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews
