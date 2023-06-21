'use client'
import React, { useState } from 'react';

import HeroSection from '@/components/HeroSection';

const HomePage = () => {
  const [selectedHero, setSelectedHero] = useState<string | null>(null);

  const selectHeroHandler = (hero: string) => {
    setSelectedHero(hero);
  }

  return (
    <div className="flex justify-center items-center grow ">
      <HeroSection setSelectedHero={setSelectedHero} />
    </div>
  )
}

export default HomePage;

interface SelectedHero {

}
