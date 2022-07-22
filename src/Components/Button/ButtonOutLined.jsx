import { Btn, ButtonOuter } from "./ButtonOutLinedStyle";

const ButtonOutLined = ({ children }) => {
  return (
    <ButtonOuter>
      <button>{children}</button>
    </ButtonOuter>
  );
};

export default ButtonOutLined;
