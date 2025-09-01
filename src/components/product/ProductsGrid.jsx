import { Grid, List, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductsGrid({
  sortedProducts,
  selectedCategory,
  viewMode,
  setViewMode,
}) {
  const { addToCart } = useCart();

  return (
    <div className="lg:w-3/4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedCategory === "all"
            ? "All Products"
            : categories.find((c) => c.id === selectedCategory)?.name}
        </h2>
        <div className="flex items-center space-x-4">
          <p className="text-gray-600">{sortedProducts.length} products found</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
        }
      >
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
              viewMode === "grid" ? "transform hover:-translate-y-1" : "flex items-center"
            }`}
          >
            <Link
              to={`/product/${product.id}`}
              className={viewMode === "list" ? "flex-shrink-0" : ""}
            >
              <div
                className={viewMode === "grid" ? "aspect-w-1 aspect-h-1" : "w-32 h-32"}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-contain hover:scale-105 transition-transform duration-300 ${
                    viewMode === "grid"
                      ? "w-full h-44"
                      : "w-32 h-32 rounded-l-xl"
                  }`}
                />
              </div>
            </Link>

            <div className={viewMode === "grid" ? "p-6" : "flex-1 p-6"}>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  ({product.reviews})
                </span>
                {!product.inStock && (
                  <span className="ml-auto text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                    Out of Stock
                  </span>
                )}
              </div>

              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-semibold mb-2 hover:text-green-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>

              <div
                className={`flex items-center ${
                  viewMode === "grid" ? "justify-between" : "justify-between"
                }`}
              >
                <span className="text-2xl font-bold text-green-600">
                  ${product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    product.inStock
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
