import Image from 'next/image';

import { roleIcons } from '@/lib/constants';

const Attribute: React.FC<AttributeProps> = ({ attribute, statBase, stateGain }) => {

  return (
    <div className="flex flex-row justify-left items-center my-1">
      <Image
        alt={`${attribute}-image`}
        className="object-cover mr-1"
        width={30}
        height={30}
        src={roleIcons[attribute]}
      />
      <div className="text-lg ml-2.5">{statBase}</div>
      <div className="text-sm text-[#999] ml-2.5 text-right grow">+{stateGain}</div>
    </div>
  );
}

export default Attribute;

interface AttributeProps {
  attribute: "str" | "int" | "all" | "agi";
  statBase: number;
  stateGain: number;
}
