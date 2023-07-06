import GraphPage from '@/components/GraphPage';
import Navbar from '@/components/Navbar';

const Winrate: React.FC<WinRate> = async ({ params: { id } }) => {
  const backgroundImage = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg';
  const [heroId, ...restOfName] = id.split('-');
  const heroName = restOfName.join('-').replace('%20', ' ');

  return (
    <div
      className="flex h-screen flex-row items-center justify-start"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', }}
    >
      <Navbar />
      <main className="flex grow h-auto w-[90vw] pb-10">
        <GraphPage heroId={heroId} heroName={heroName} />
      </main>
    </div>

  )
};

export default Winrate;

interface WinRate {
  params: { id: string }
}