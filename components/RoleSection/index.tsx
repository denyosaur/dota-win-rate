import Image from 'next/image';

import { RoleSectionProps } from '@/interface';

import HeroIcon from '../HeroIcon';

import { roleIcons } from './constants';

const RoleSection: React.FC<RoleSectionProps> = ({ heroes, role }) => {
  return (
    <div className="flex flex-row justify-center items-center mb-6">
      <div className="flex justify-center items-center relative w-10 h-10">
        <Image
          alt={`${role}-image`}
          className="object-cover"
          width={40}
          height={40}
          src={roleIcons[role]}
        />
      </div>
      <div
        className="
          inline-grid
          justify-center
          items-center
          grid grid-flow-row gap-2 grid-cols-repeater
          w-full
        "
      >
        {heroes?.map(hero => (
          <HeroIcon
            key={hero.heroId}
            heroId={hero.heroId.toString()}
            shortName={hero.shortName}
            heroImage={hero.heroImage}
            attributePrimary={hero.attributePrimary}
          />
        ))}
      </div>
    </div>
  )
}

export default RoleSection;


