import HomePage from '@/components/HomePage';
import Navbar from '@/components/Navbar';

export default function Home() {
  const backgroundImage = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg';
  return (
    <div
      className="flex h-screen flex-col items-center justify-start"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      <main className="flex grow h-auto w-[90vw]">
        <HomePage />
      </main>
    </div>
  )
}
