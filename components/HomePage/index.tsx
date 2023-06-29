import HeroSection from '@/components/HeroSection';
import GraphSection from '@/components/GraphSection';

const HomePage: React.FC = () => {
  return (
    <div className="flex justify-center items-center grow ">
      <HeroSection />
      <GraphSection heroId={'1'} heroName={'Anti-Mage'} />
    </div>
  )
}

export default HomePage;
