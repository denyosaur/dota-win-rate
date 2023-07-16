import GraphPage from '@/components/GraphPage';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const Winrate: React.FC<WinRate> = async ({ params: { id } }) => {
  const backgroundImage = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg';
  const [heroId, ...restOfName] = id.split('-');
  const heroName = restOfName.join('-').replace('%20', ' ');

  return (
    <div
      className="flex h-screen flex-row items-center justify-start"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', }}
    >
      <Navbar>
        <HeroSection />
      </Navbar>
      <main className="flex grow h-screen w-[90vw] max-w-[90rem]">
        <GraphPage heroId={heroId} heroName={heroName} />
      </main>
    </div>

  )
};

export default Winrate;

interface WinRate {
  params: { id: string }
}
