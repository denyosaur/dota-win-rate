'use client'
import Image from 'next/image';
import { HeroIcon } from '@/interface';

const HeroIcon: React.FC<HeroIcon> = ({
  heroId,
  heroImage,
  name,
  roles,
  statAttr,
}) => {
  const roleDataAttr = roles.map((role) => `data-${role}`);

  const selectHeroHandler = (obj: { heroId: string, name: string }) => {
    const { heroId, name } = obj;
    localStorage.setItem('selectedHeroId', heroId);
    localStorage.setItem('selectedHeroName', name);
  };

  return (
    <div
      className="relative h-8 w-14"
      data-heroid={heroId}
      data-stat-attr={statAttr}
      {...roleDataAttr}
    >
      <Image
        alt={`${name}-image`}
        className="
          object-cover h-full w-full
          cursor-pointer
          hover:scale-125
        "
        fill
        onClick={() => selectHeroHandler({ heroId, name })}
        src={heroImage}
      />
    </div>
  )
}

export default HeroIcon;
