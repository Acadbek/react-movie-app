import { ButtonInner } from "./ButtonStyle";

const Button = ({ children }) => {
  return (
    <ButtonInner>
      <button>{children}</button>
    </ButtonInner>
  );
};

export default Button;
