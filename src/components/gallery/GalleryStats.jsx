export default function GalleryStats() {
  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600">Photos</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600">Videos</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">1M+</div>
            <div className="text-gray-600">Views</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">25K+</div>
            <div className="text-gray-600">Likes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
