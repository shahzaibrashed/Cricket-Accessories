
import AboutHero from '../components/about/AboutHero';
import Certifications from '../components/about/Certifications';
import MissionVission from '../components/about/MissionVission';
import OurStory from '../components/about/OurStory';
import Stats from '../components/about/Stats';
import Team from '../components/about/Team';
import Timeline from '../components/about/Timeline';
import Values from '../components/about/Values';

export default function About() {
  return (
    <div className="min-h-screen">
    <AboutHero/>
    <MissionVission/>
    <Stats/>
    <Timeline/>
    <OurStory/>
    <Values/>
    <Certifications/>
    <Team/>
    </div>
  );
}