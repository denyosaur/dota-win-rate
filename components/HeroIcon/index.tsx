import Image from 'next/image';
import { HeroIcon } from '@/interface';

const HeroIcon: React.FC<HeroIcon> = ({
  name,
  roles,
  setSelectedHero,
  statAttr,
}) => {
  const adjustedName = name.substring(14);
  const portraitUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${adjustedName}.png?`;
  const roleDataAttr = roles.map((role) => `data-${role}`);

  const selectHeroHandler = (hero: string) => {
    setSelectedHero(hero);
  }

  return (
    <div
      className="relative h-8 w-14"
      data-stat-attr={statAttr}
      data-hero-name={adjustedName}
      {...roleDataAttr}
    >
      <Image
        alt={`${adjustedName}-image`}
        className="
          object-cover h-full w-full
          cursor-pointer
          hover:scale-125
        "
        fill
        src={portraitUrl}
        onClick={() => selectHeroHandler(name)}
      />
    </div>
  )
}

export default HeroIcon;
