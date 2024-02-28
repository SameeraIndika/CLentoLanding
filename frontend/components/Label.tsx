import { twMerge } from "tailwind-merge";

interface LabelProps {
  name: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ name, className }) => { 
  return (
    <label 
    className={twMerge(
      `
      text-sm 
      font-medium 
      text-slate-200
      `,
      className
    )}>
      {name}
    </label>
  );
}

export default Label;