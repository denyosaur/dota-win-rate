import HomePage from '@/components/HomePage';

export default function Home() {
  const backgroundImage = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg';
  return (
    <main
      className="flex h-screen flex-col items-center justify-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="h-full w-[80vw]"
      >
        <HomePage />
      </div>
    </main>
  )
}
