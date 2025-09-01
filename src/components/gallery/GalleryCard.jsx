import {  Eye, Heart, Share2 } from "lucide-react";

export default function GalleryCard({ item, onClick }) {
  return (
    <div
      className="relative group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <Eye className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
        <p className="font-semibold text-green-500 mb-2">{item.captain}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              20 M
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              32,87672 views
            </span>
          </div>
          <button className="hover:text-purple-600 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
