import { Hero } from '@/interface';
import HeroIcon from '../../HeroIcon';

const RoleSection: React.FC<RoleSectionProps> = ({ heroes }) => {
  return (
    <div className="grid grid-flow-row mb-10 auto-cols-max">
      {heroes?.map(hero => (
        <HeroIcon
          key={hero.id}
          name={hero.name}
          statAttr={hero.primary_attr}
          roles={hero.roles}
        />
      ))}
    </div>
  )
}

export default RoleSection;

interface RoleSectionProps {
  heroes: Hero[];
}
