import { FC } from "react";
import styled from "styled-components";

interface stylesButton {
  background?: string;
  border?: string;
  isDisabled: boolean;
  color?: string;
  text: string;
  width?: number;
  height?: number;
  onClick: () => void;
}

export const DefaultButton: FC<stylesButton> = ({
  background,
  border,
  isDisabled,
  color,
  text,
  width,
  height,
  onClick,
}) => {
    const defBackground = background || "#304ffe"
    const defBorder = border || 'none'
    const defColor = color || "#fff"
    const defWidth = width || 120
    const defHeight = height || 40
  const Button = styled.button`
    background: ${defBackground};
    border: 1px solid ${defBorder};
    border-radius: 10px;
    color: ${defColor};
    font-weight: 600;
    width: ${defWidth}px;
    height: ${defHeight}px;
    transition: all 0.2s ease;
    &:hover {
      background: ${"#0026CA"};
    }
  `;
  return (
    <Button onClick={() => onClick()} disabled={isDisabled}>
      {text}
    </Button>
  );
};
