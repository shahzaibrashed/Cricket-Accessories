import GalleryCard from "./GalleryCard";



export default function GalleryGrid({ items, onSelect }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <GalleryCard key={item.id} item={item} onClick={() => onSelect(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}
