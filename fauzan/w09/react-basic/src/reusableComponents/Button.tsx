export interface ButtonProps {
  text?: string;
  className: string;
  onClick?: (num: number) => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  handleClick: (num: number) => void;
}

const CustomButton = ({
  text,
  handleClick,
  className,
  onClick,
  setCount,
  count,
}: ButtonProps) => {
  const a = 1;

  return (
    <>
      <button
        onClick={() => {
          setCount((prev) => prev + 5);
          // trigger si handleClick
          handleClick(a);
        }}
        className={className}
      >
        {text} from {count}
      </button>
    </>
  );
};

export default CustomButton;
