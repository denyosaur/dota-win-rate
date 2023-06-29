import GraphSection from '@/components/GraphSection';
import HeroSection from '@/components/HeroSection';

const GraphPage: React.FC<GraphPageProps> = ({ heroId, heroName }) => {
  return (
    <div className="flex justify-center items-center grow ">
      <HeroSection />
      <GraphSection heroId={heroId} heroName={heroName} />
    </div>
  )
}

export default GraphPage;

interface GraphPageProps {
  heroId: string;
  heroName: string;
}
