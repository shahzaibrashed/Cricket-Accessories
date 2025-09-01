import { Tag, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";



export default function ArticleCard({ article }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <Tag className="w-3 h-3 mr-1" />
            {article.category}
          </span>
          <span className="text-sm text-gray-500">{article.readTime}</span>
        </div>

        <h3 className="text-xl font-semibold mb-3 hover:text-green-600 transition-colors">
          <Link to={`/news/${article.id}`}>{article.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>

        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <User className="w-4 h-4" />
          <span>{article.author}</span>
          <Calendar className="w-4 h-4 ml-2" />
          <span>{article.date}</span>
        </div>
      </div>
    </article>
  );
}
