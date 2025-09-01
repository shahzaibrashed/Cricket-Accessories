import { useState } from "react";
import NewsBanner from "../components/news/Newsbanner";
import CategoryFilter from "../components/news/CategoryFilter";
import FeaturedArticle from "../components/news/FeaturedArticle";
import ArticlesGrid from "../components/news/ArticlesGrid";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

   const newsArticles = [
    {
      id: 1,
      title: 'Revolutionary Smart Cricket Bat technology Unveiled',
      excerpt: 'CricketPro introduces AI-powered cricket bats that provide real-time performance analytics and technique improvement suggestions.',
      content: 'Full article content here...',
      author: 'Tech Team',
      date: 'March 20, 2025',
      category: 'technology',
      image: 'https://cricketstoreonline.com/cdn/shop/articles/Latest_Cricket_Product_Launches_and_Innovations.jpg?v=1750254643&width=1100',
      featured: true,
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'World Cup 2025: Equipment Trends and Innovations',
      excerpt: 'Analyzing the latest equipment trends from the ongoing Cricket World Cup and what they mean for amateur players.',
      content: 'Full article content here...',
      author: 'Sports Analyst',
      date: 'March 18, 2025',
      category: 'sports',
      image: 'https://cricketstoreonline.com/cdn/shop/articles/Cricket_World_Cup_2025_Bats.jpg?v=1752619835',
      featured: false,
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Sustainable Cricket Equipment: Our Green Initiative',
      excerpt: 'How CricketPro is leading the industry in environmentally friendly cricket equipment manufacturing.',
      content: 'Full article content here...',
      author: 'Sustainability Team',
      date: 'March 15, 2025',
      category: 'sustainability',
      image: 'https://www.kiaoval.com/wp-content/uploads/2021/08/ODI-refund-info-3.jpg',
      featured: false,
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Training Tips: Improving Your Batting Average',
      excerpt: 'Professional coaches share their top secrets for consistent batting performance and technique improvement.',
      content: 'Full article content here...',
      author: 'Coaching Staff',
      date: 'March 12, 2025',
      category: 'training',
      image: 'https://cdn.shopify.com/s/files/1/0330/2014/9899/files/Focus-on-the-ball_480x480.png?v=1617611992',
      featured: false,
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Equipment Safety Standards: What You Need to Know',
      excerpt: 'Understanding the latest safety certifications and standards for cricket protective equipment.',
      content: 'Full article content here...',
      author: 'Safety Expert',
      date: 'March 10, 2025',
      category: 'safety',
      image: 'https://sterosport.co.uk/wp-content/uploads/2022/08/cricket-pitch.jpg',
      featured: false,
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'Junior Cricket: Choosing the Right Equipment',
      excerpt: 'A comprehensive guide for parents on selecting appropriate cricket equipment for young players.',
      content: 'Full article content here...',
      author: 'Youth Coach',
      date: 'March 8, 2025',
      category: 'youth',
      image: 'https://cricketstoreonline.com/cdn/shop/articles/01_Category_Page_Main_Banner_Jan_2024-1_c810f26a-d07f-4f20-a213-11da96e75855.jpg?v=1742220323&width=1100',
      featured: false,
      readTime: '5 min read'
    }
  ];

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'technology', name: 'Technology' },
    { id: 'sports', name: 'Sports' },
    { id: 'training', name: 'Training' },
    { id: 'safety', name: 'Safety' },
    { id: 'sustainability', name: 'Sustainability' },
    { id: 'youth', name: 'Youth Cricket' }
  ];

  const filteredArticles = newsArticles.filter(
    (article) =>
      (selectedCategory === "all" || article.category === selectedCategory) &&
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredArticle = newsArticles.find((article) => article.featured);
  const regularArticles = filteredArticles.filter((a) => a);

  return (
    <div className="min-h-screen bg-gray-50">
      <NewsBanner searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {featuredArticle && selectedCategory === "all" && (
          <FeaturedArticle article={featuredArticle} />
        )}
        <ArticlesGrid articles={regularArticles} />
      </div>
    </div>
  );
}
