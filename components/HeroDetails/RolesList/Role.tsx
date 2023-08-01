const Role: React.FC<RoleProps> = ({ roleLevel, roleName }) => {
  const levelWidth = {
    width: `${roleLevel * 33.33}%`,
  };

  return (
    <div className="flex  flex-col w-[30%] h-8 my-[5px]">
      <div className="w-full text-sm font-bold tracking-wider text-left">{roleName}</div>
      <div className="relative w-full h-1.5 max-h-1.5 mt-1">
        <div className="absolute left-0 top-0 bg-[#4c4c4c] w-full h-full"></div>
        <div
          className="
            absolute left-0 top-0 bg-[#fff] w-full h-full
            shadow-roleLevelShadow
          "
          style={levelWidth}
        ></div>
      </div>
    </div>
  )
}

export default Role;

interface RoleProps {
  roleLevel: number;
  roleName: string;
}
