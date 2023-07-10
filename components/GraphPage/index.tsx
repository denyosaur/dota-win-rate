
import HeroInfoSection from '@/components/HeroInfoSection';

const GraphPage: React.FC<GraphPageProps> = ({ heroId }) => {
  return (
    <div className="flex grow justify-start items-start pt-28">
      <HeroInfoSection heroId={heroId} />
    </div>
  )
}

export default GraphPage;

interface GraphPageProps {
  heroId: string;
  heroName: string;
}
