import { ReactNode } from "react";
import { StyledContainer, StyledFlex, StyledImage } from "./styles";

interface ImageLayoutWithInputsProps {
  children: ReactNode;
}

export function ImageLayoutWithInputs({
  children,
}: ImageLayoutWithInputsProps) {
  return (
    <StyledFlex>
      <StyledImage image="https://images5.alphacoders.com/855/855281.jpg" />
      <StyledContainer>{children}</StyledContainer>
    </StyledFlex>
  );
}
