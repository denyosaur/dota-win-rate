'use client'
import React, { ReactNode, useState } from 'react';

const Navbar = ({ children }: NavbarProps) => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const icon = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/global/dota2_logo_symbol.png';
  const navbarBackgroundImage = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg';
  const backgroundIcon = {
    backgroundImage: `url(${icon})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  };

  const toggleNavbar = () => {
    setIsActive(!isActive)
  };

  const navbarClassNames = isActive ?
    `absolute top-0 left-0
    flex flex-col 
    h-screen w-[45rem]
    p-3 
    bg-zinc-900
    z-[2]
    transition-all ease-in-out delay-350
    shadow-2xl
    ` :
    `absolute top-0 left-0
    flex flex-col 
    h-screen w-32
    p-3 
    bg-zinc-900
    z-[2]
    transition-all ease-in-out delay-350
    shadow-2xl
    `;

  return (
    <nav
      className={navbarClassNames}
      style={{ backgroundImage: `url(${navbarBackgroundImage})`, backgroundSize: 'initial', }}
    >
      <div className="relative w-[50px] h-[50px] mt-3 ml-7">
        <a
          className="flex w-[50px] h-[50px] min-w-[50px] min-h-[50px] opacity-80"
          href={'/'}
          style={backgroundIcon}
        ></a>
      </div>
      <div
        className={`
        flex
        h-full w-full
        ${isActive ? "opacity-100" : "opacity-0"}
        ${isActive ? "translate-x-0" : "translate-x-[-30rem]"}
        overflow-hidden
        transition-all ease-in-out delay-350
        `}
      >
        {children}
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
        onClick={() => toggleNavbar()}
      >
        <button>button</button>
      </div>
    </nav>
  )
}

export default Navbar;

interface NavbarProps {
  children: ReactNode;
}