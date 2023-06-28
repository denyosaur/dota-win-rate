'use client'
import React, { useState } from 'react';

import HeroSection from '@/components/HeroSection';
import GraphSection from '@/components/GraphSection';

import { SelectedHero } from '@/interface';

const HomePage = () => {
  const [selectedHero, setSelectedHero] = useState<SelectedHero>({ heroId: '1', name: 'antimage' });

  return (
    <div className="flex justify-center items-center grow ">
      <HeroSection setSelectedHero={setSelectedHero} />
      {/* <GraphSection selectedHero={selectedHero} /> */}
    </div>
  )
}

export default HomePage;
