import Image from 'next/image';

import Attribute from '@/components/HeroDetails/Attributes/Attribute';

const Attributes: React.FC<AttributesProps> = ({
  agilityBase,
  agilityGain,
  heroImage,
  intelligenceBase,
  intelligenceGain,
  shortName,
  strengthBase,
  strengthGain,
  hpRegen,
  mpRegen,
}) => {
  const health = 120 + (strengthBase * 22);
  const mana = 75 + (intelligenceBase * 12);
  const textShadow = {
    textShadow: '1px 1px 2px #000',
  }

  return (
    <div className="flex flex-col justify-center items-center min-w-[300px] w-4/12">
      <div className="flex flex-row justify-around items-center w-full">
        <div className="flex flex-col w-[150px]">
          <Image
            alt={`${shortName}-image`}
            className="
            object-cover
            cursor-pointer
          "
            width={150}
            height={84}
            src={heroImage}
          />
          <div
            className="flex items-center relative h-5 w-full bg-gradient-to-r from-[#286323] to-[#7AF03C]"
          >
            <p className="w-full text-center text-sm font-extrabold leading-6" style={textShadow}>{health}</p>
            <p className="absolute right-0 text-[#286323] text-xs pr-4">+{hpRegen}</p>
          </div>
          <div
            className="flex items-center relative h-5 w-full bg-gradient-to-r from-[#1056DB] to-[#73F5FE]"
          >
            <p className="w-full text-center text-sm font-extrabold leading-6" style={textShadow}>{mana}</p>
            <p className="absolute right-0 text-[#1056db] text-xs pr-4">+{mpRegen}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[100px]">
          <Attribute
            attribute={'str'}
            statBase={strengthBase}
            stateGain={strengthGain}
          />
          <Attribute
            attribute={'agi'}
            statBase={agilityBase}
            stateGain={agilityGain}
          />
          <Attribute
            attribute={'int'}
            statBase={intelligenceBase}
            stateGain={intelligenceGain}
          />
        </div>
      </div>
      <div className="mt-5">
        <p className="tracking-widest font-light uppercase text-[#969696]">attributes</p>
      </div>
    </div>
  )
}

export default Attributes;

interface AttributesProps {
  agilityBase: number;
  agilityGain: number;
  heroImage: string;
  intelligenceBase: number;
  intelligenceGain: number;
  shortName: string;
  strengthBase: number;
  strengthGain: number;
  hpRegen: number;
  mpRegen: number;
}
