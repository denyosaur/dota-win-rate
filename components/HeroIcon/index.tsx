'use client'
import Image from 'next/image';
import Link from 'next/link';

import { HeroIcon } from '@/interface';

const HeroIcon: React.FC<HeroIcon> = ({
  heroId,
  heroImage,
  name,
  statAttr,
}) => {

  return (
    <div
      className="flex justify-center items-center relative h-full w-full"
      data-heroid={heroId}
      data-stat-attr={statAttr}
    >
      <Link
        className="flex justify-center items-center relative h-full w-full"
        href={`/winrate/${heroId}-${name}`}
        replace
      >
        <Image
          alt={`${name}-image`}
          className="
            object-cover
            cursor-pointer
            hover:scale-125
          "
          width={52}
          height={36}
          src={heroImage}
        />
      </Link>
    </div>
  )
}

export default HeroIcon;
