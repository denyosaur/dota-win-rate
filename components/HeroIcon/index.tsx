import Image from 'next/image';
import { HeroIcon } from '@/interface';

const HeroIcon: React.FC<HeroIcon> = ({
  name,
  statAttr,
  roles,
}) => {
  const adjustedName = name.substring(14);
  const portraitUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${adjustedName}.png?`;
  const roleDataAttr = roles.map((role) => `data-${role}`);

  return (
    <div
      className="relative h-9 w-16"
      data-stat-attr={statAttr}
      data-hero-name={adjustedName}
      {...roleDataAttr}
    >
      <Image
        alt={`${adjustedName}-image`}
        className="object-cover h-full w-full"
        fill
        src={portraitUrl}
      />
    </div>
  )
}

export default HeroIcon;
