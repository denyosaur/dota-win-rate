import HomePage from '@/components/HomePage';

export default function Home() {
  const backgroundImage = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg';

  return (
    <div
      className="flex h-screen flex-col items-center justify-start"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', }}
    >
      <main className="flex grow h-auto w-[90vw]">
        <HomePage />
      </main>
    </div>
  )
}
