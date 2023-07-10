
import Image from 'next/image';

import { HeroIcon } from '@/interface';

const HeroIcon: React.FC<HeroIcon> = ({
  heroId,
  shortName,
  heroImage,
  attributePrimary,
}) => {

  return (
    <div
      className="flex justify-center items-center relative h-full w-full"
      data-heroid={heroId}
      data-stat-attr={attributePrimary}
    >
      <a
        className="flex justify-center items-center relative h-full w-full"
        href={`/winrate/${heroId}`}
      >
        <Image
          alt={`${shortName}-image`}
          className="
            object-cover
            cursor-pointer
            hover:scale-125
          "
          width={52}
          height={36}
          src={heroImage}
        />
      </a>
    </div>
  )
}

export default HeroIcon;
