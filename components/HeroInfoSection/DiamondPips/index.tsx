const DiamondPips: React.FC<DiamondPipsProp> = ({ complexity }) => {

  return (
    <div className="flex flex-row mt-2">
      <div
        className={`
        border border-white 
        ${complexity === 1 ? 'bg-white' : ''}
        origin-center 
        rotate-45 
        h-3.5 w-3.5
        mr-4 
      `}
      >
      </div>
      <div
        className={`
          border border-white 
          ${complexity === 2 ? 'bg-white' : ''}
          origin-center 
          rotate-45 
          h-3.5 w-3.5
          mr-4
        `}
      >
      </div>
      <div
        className={`
          border border-white 
          ${complexity === 3 ? 'bg-white' : ''}
          origin-center 
          rotate-45 
          h-3.5 w-3.5
          mr-4
        `}
      >
      </div>
    </div>
  )
}

export default DiamondPips;

interface DiamondPipsProp {
  complexity: number;
}
