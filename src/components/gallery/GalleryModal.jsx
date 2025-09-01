import { X, Heart, Eye, Download, Share2 } from "lucide-react";


export default function GalleryModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-900  z-10"
        >
          <X className="w-8 h-8" />
        </button>
        
        <img
          src={item.src}
          alt={item.title}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-xl font-semibold mb-2 text-green-500">{item.captain}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                20 M
              </span>
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                32,464,554 views
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
