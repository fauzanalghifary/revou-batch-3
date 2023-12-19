type ButtonProps = {
  text: string;
  className: string;
};

const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      // style={{
      //   backgroundColor: color,
      // }}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
