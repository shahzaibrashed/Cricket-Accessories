import { useState } from "react";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryStats from "../components/gallery/GalleryStats";
import GalleryCategories from "../components/gallery/GalleryCategories";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryModal from "../components/gallery/GalleryModal";


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

const galleryItems = [
  {
    id: 1,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1fN7ZCskU-HHEyuDn3rL4SlHYasFJa18tRRzYFTpBHRKAi4lDfOUJ0-uOBfcogBw5Vg&usqp=CAU",
    title: "1975 Final: West Indies vs Australia",
    category: "1975",
    captain: "Clive Lloyd",
  },
  {
    id: 2,
    src: "https://assets.sportsboom.com/Clive_Lloyd_with_1975_World_Cup_Trophy_2_d97bd29ff3.jpeg",
    title: "1979 Final: West Indies vs England",
    category: "1979",
    captain: "Clive Lloyd",
  },
  {
    id: 3,
    src: "https://images.icc-cricket.com/image/upload/t_ratio21_9-size40-webp/prd/cegkfqeodwgxtyqyg7di",
    title: "1983 Final: India vs West Indies",
    category: "1983",
    captain: "Kapil Dev",
  },
  {
    id: 4,
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/222600/222633.3.jpg",
    title: "1987 Final: Australia vs England",
    category: "1987",
    captain: "Allan Border",
  },
  {
    id: 5,
    src: "https://geosuper.tv/assets/uploads/updates/2020-03-25/4563_911902_updates.jpg",
    title: "1992 Final: Pakistan vs England",
    category: "1992",
    captain: "Imran Khan",
  },
  {
    id: 6,
    src: "https://c.ndtvimg.com/2021-03/49h13dn8_arjuna-ranatunga-twitter_625x300_17_March_21.jpg?output-quality=80&downsize=330",
    title: "1996 Final: Sri Lanka vs Australia",
    category: "1996",
    captain: "Arjuna Ranatunga",
  },
  {
    id: 7,
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/284400/284482.jpg",
    title: "1999 Final: Australia vs Pakistan",
    category: "1999",
    captain: "Steve Waugh",
  },
  {
    id: 8,
    src: "https://imgk.timesnownews.com/story/ricky_ap.jpg?tr=w-1200,h-900",
    title: "2003 Final: Australia vs India",
    category: "2003",
    captain: "Ricky Ponting",
  },
  {
    id: 9,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLqBYuu67mcpZHmXDUo-_dXaU16kyqKT28JQ&s",
    title: "2007 Final: Australia vs Sri Lanka",
    category: "2007",
    captain: "Ricky Ponting",
  },
  {
    id: 10,
    src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201104/dhoni-cup-398_040411112602.jpg?VersionId=vajwZUXWSiZLrSuhZTT0gLInE5MEOT0n&size=690:388",
    title: "2011 Final: India vs Sri Lanka",
    category: "2011",
    captain: "MS Dhoni",
  },
  {
    id: 11,
    src: "https://assets.sportsboom.com/Australia_with_2015_World_Cup_Trophy_3ad9b9c159.jpeg",
    title: "2015 Final: Australia vs New Zealand",
    category: "2015",
    captain: "Michael Clarke",
  },
  {
    id: 12,
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/db/PICTURES/CMS/341700/341770.3.jpg",
    title: "2019 Final: England vs New Zealand",
    category: "2019",
    captain: "Eoin Morgan",
  },
  {
    id: 13,
    src: "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/371700/371760.jpg",
    title: "2023 Final: Australia vs India",
    category: "2023",
    captain: "Pat Cummins",
  },
];


  const categories = [
  { id: "all", name: "All Finals" },
  { id: "1975", name: "1975" },
  { id: "1979", name: "1979" },
  { id: "1983", name: "1983" },
  { id: "1987", name: "1987" },
  { id: "1992", name: "1992" },
  { id: "1996", name: "1996" },
  { id: "1999", name: "1999" },
  { id: "2003", name: "2003" },
  { id: "2007", name: "2007" },
  { id: "2011", name: "2011" },
  { id: "2015", name: "2015" },
  { id: "2019", name: "2019" },
  { id: "2023", name: "2023" },
];


  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <GalleryHero />
    
      <GalleryCategories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <GalleryGrid items={filteredItems} onSelect={setSelectedImage} />

      {selectedImage !== null && (
        <GalleryModal
          item={filteredItems[selectedImage]}
          onClose={() => setSelectedImage(null)}
        />
      )}
        <GalleryStats />
    </div>
  );
}
