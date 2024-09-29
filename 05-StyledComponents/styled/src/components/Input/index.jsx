import { InputContainer, IconContainer, InputText } from "./styles.js";

export function Input(leftIcon, name, ...rest) {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  );
}
