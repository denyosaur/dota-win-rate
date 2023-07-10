import Image from 'next/image';

import DiamondPips from '@/components/HeroInfoSection/DiamondPips';

import { attackTypeUrl, roleIcons, roleNames } from '@/lib/constants';

const HeroBio: React.FC<HeroBioProps> = ({
  attackType,
  attributePrimary,
  complexity,
  displayName,
  hype,
}) => {
  const translatedText = { __html: hype };

  return (
    <div className="flex flex-col pr-9 text-xl">
      <div className="flex flex-row items-center">
        <Image
          alt={`${attributePrimary}-image`}
          className="object-cover mr-1"
          width={32}
          height={32}
          src={roleIcons[attributePrimary]}
        />
        {roleNames[attributePrimary].toUpperCase()}
      </div>
      <div className="text-6xl mt-3">
        <span>
          {displayName}
        </span>
      </div>
      <div dangerouslySetInnerHTML={translatedText} />
      <div>
        <p className="mt-7 text-gray-500 text-base font-semibold tracking-widest">
          ATTACK TYPE
        </p>
        <div className="flex flex-row items-center text-base mt-2">
          <Image
            alt={`${attackType}-image`}
            className="object-cover mr-1"
            width={24}
            height={24}
            src={attackTypeUrl[attackType]}
          />
          {attackType.toUpperCase()}
        </div>
      </div>
      <div>
        <p className="mt-7 text-gray-500 text-base font-semibold tracking-widest">
          COMPLEXITY
        </p>
        <DiamondPips complexity={complexity} />
      </div>
    </div>
  )
}

export default HeroBio;

interface HeroBioProps {
  attackType: 'Ranged' | 'Melee';
  attributePrimary: 'agi' | 'all' | 'int' | 'str';
  complexity: number;
  displayName: string;
  hype: string;
}
