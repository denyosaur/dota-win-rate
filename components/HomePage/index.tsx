import HeroSection from '@/components/HeroSection';
import GraphPage from '@/components/GraphPage';

const HomePage: React.FC = () => {
  return (
    <div className="flex grow justify-start items-start w-full h-full">
      <GraphPage heroId={'1'} heroName={'Anti-Mage'} />
    </div>
  )
}

export default HomePage;
