import Image from 'next/image';

import { RoleSectionProps } from '@/interface';

import HeroIcon from '../../HeroIcon';

import { roleIcons } from './constants';

const RoleSection: React.FC<RoleSectionProps> = ({ heroes, role }) => {
  return (
    <div className="flex flex-row justify-center items-center mb-6">
      <div className="flex justify-center items-center relative w-10 h-10 mr-5">
        <Image
          alt={`${role}-image`}
          className="
                object-cover h-full w-full
                cursor-pointer
                hover:scale-125
              "
          fill
          src={roleIcons[role]}
        />
      </div>
      <div
        className="
        grid grid-flow-row gap-2 grid-cols-repeater
        w-full
      "
      >
        {heroes?.map(hero => (
          <HeroIcon
            key={hero.hero_id}
            heroId={hero.hero_id.toString()}
            heroImage={hero.hero_image}
            name={hero.hero_name}
            roles={hero.roles}
            statAttr={hero.primary_attributes}
          />
        ))}
      </div>
    </div>
  )
}

export default RoleSection;


