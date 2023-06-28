import HeroSection from '@/components/HeroSection';
import GraphSection from '@/components/GraphSection';

import { SelectedHero } from '@/interface';

const HomePage = () => {

  return (
    <div className="flex justify-center items-center grow ">
      <HeroSection />
      {/* <GraphSection selectedHero={selectedHero} /> */}
    </div>
  )
}

export default HomePage;
