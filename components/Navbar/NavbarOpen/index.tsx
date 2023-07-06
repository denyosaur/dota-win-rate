import HeroSection from '@/components/HeroSection';

const NavbarOpen = () => {
  const icon = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png';
  const navbarBackgroundImage = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg';
  const backgroundIcon = {
    backgroundImage: `url(${icon})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  };

  return (
    <div
      className="flex flex-col h-full w-full"
      style={{ backgroundImage: `url(${navbarBackgroundImage})`, backgroundSize: 'cover', }}>
      <div className="flex flex-row items-center h-[80px] px-[30px] w-full">
        <div className="relative w-[50px] h-[50px]">
          <a
            className="flex w-[50px] h-[50px] min-w-[50px] min-h-[50px] opacity-80"
            href={'/'}
            style={backgroundIcon}
          ></a>
        </div>
      </div>
      <HeroSection />
    </div>
  )
}

export default NavbarOpen;
