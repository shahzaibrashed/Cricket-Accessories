import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";



export default function FeaturedArticle({ article }) {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {article.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {article.readTime}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {article.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">By {article.author}</span>
              <Link
                to={'/news'}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
