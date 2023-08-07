import HomePage from '@/components/HomePage';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const backgroundImage = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg';

  return (
    <div
      className="flex h-screen flex-col items-center justify-start"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', }}
    >
      <Navbar>
        <HeroSection />
      </Navbar>
      <main className="flex grow h-screen w-[90vw] max-w-[90rem]">
        <HomePage />
      </main>
    </div>
  )
}
