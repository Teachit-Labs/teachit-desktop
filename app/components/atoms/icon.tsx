interface IconProps {
  name: "search";
}

const Icon: React.FC<IconProps> = ({ name }: IconProps) => {
  return <span className="material-symbols-outlined">{name}</span>;
};

export default Icon;
