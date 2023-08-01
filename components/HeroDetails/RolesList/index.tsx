import Role from './Role';

import { roleNames } from './constants';

const RolesList: React.FC<RolesProp> = ({ roleStats }) => {
  const adjustedRoleNames = { ...roleNames };
  roleStats.forEach((roleInfo: RoleStats) => {
    const keyToUse: ValidKeys = roleInfo.roleId.toString() as ValidKeys;
    adjustedRoleNames[keyToUse].level = roleInfo.level
  });

  return (
    <div className="flex flex-col justify-center items-center min-w-[300px] w-4/12 h-full px-5">
      <div className="flex flex-row flex-wrap items-center justify-between w-full">
        {Object.keys(adjustedRoleNames).map((key) => {
          return (
            <Role
              key={adjustedRoleNames[key as ValidKeys].role}
              roleLevel={adjustedRoleNames[key as ValidKeys].level}
              roleName={adjustedRoleNames[key as ValidKeys].role}
            />
          )
        })}
      </div>
      <div className="mt-5">
        <p className="tracking-widest font-light uppercase text-[#969696]">roles</p>
      </div>
    </div>
  )
}

export default RolesList;

interface RolesProp {
  roleStats: RoleStats[];
}

interface RoleStats {
  level: number;
  roleId: number;
}
type ValidKeys = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';