const Pip: React.FC<PipProps> = ({ fill }) => (
  <div
    className={`
      border border-white 
      ${fill ? 'bg-white' : ''}
      origin-center 
      rotate-45 
      h-3.5 w-3.5
      mr-4
    `}
  >
  </div>
);

export default Pip;

interface PipProps {
  fill: boolean;
}
