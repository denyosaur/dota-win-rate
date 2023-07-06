'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';

const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const icon = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png';
  const navbarBackgroundImage = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//blog/bg_repeater.jpg';
  const backgroundIcon = {
    backgroundImage: `url(${icon})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  };

  const toggleNavbar = () => {
    setIsActive(!isActive)
    console.log(isActive)
  };

  return (
    <nav
      className="
        absolute top-0 left-0
        flex flex-col 
        h-screen w-3/5 
        p-3 
        bg-zinc-900
        z-[2]
      "

    >
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

      <div
        className="
          absolute top-2/4 right-[-2.6rem]
          flex justify-center items-center 
          h-24 w-24 
          bg-[red] 
          rounded-full
          pointer
        "
        onClick={() => setIsActive(!isActive)}
      >
        <button>button</button>
      </div>
    </nav>
  )
}

export default Navbar;
