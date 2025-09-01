import HeroSection from '../components/home/HeroSection';
import BrandPartners from '../components/home/BrandPartners';
import WhyChoose from '../components/home/WhyChoose';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PerformanceStats from '../components/home/PerformanceStats';
import Testimonials from '../components/home/Testimonials';
import LatestNews from '../components/home/LatestNews';
import Newsletter from '../components/home/Newsletter';
import VideoSection from '../components/home/VideoSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <BrandPartners/>
      <WhyChoose/>
     <FeaturedProducts/>
     <PerformanceStats/>
      <Testimonials />     
      <LatestNews />
      <VideoSection/> 
      <Newsletter/>
    </div>
  );
}