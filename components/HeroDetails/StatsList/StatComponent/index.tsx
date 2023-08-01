import Image from 'next/image';

import { icons } from '@/lib/constants';

const StatComponent: React.FC<StatComponentProps> = ({ type, stat }) => {

  return (
    <div className="flex flex-row items-center mt-1.5">
      <Image
        alt={`${type}-image`}
        className=" object-cover mr-2"
        width={24}
        height={24}
        src={icons[type as ValidKeys]}
      />
      <p className="text-sm">{stat}</p>
    </div>
  )
}

export default StatComponent;

interface StatComponentProps {
  type: string;
  stat: string | number;
}

type ValidKeys = 'armor' | 'attack' | 'attackRange' | 'attackRate' | 'magicResist' | 'moveSpeed' | 'projectileSpeed' | 'turnRate' | 'vision';
