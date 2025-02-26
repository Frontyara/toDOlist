import { FC } from "react";
import styled from "styled-components";
import colors from "../../sharedOfShared/colors";

interface stylesButton {
  background?: string;
  border?: string;
  color?: string;
  isDisabled: boolean;
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
  const defBackground = background || colors.deepBlue;
  const defBorder = border || "none";
  const defColor = color || colors.white;
  const defWidth = width || 120;
  const defHeight = height || 40;

  if (!isDisabled) {
    var Button = styled.button`
      background: ${defBackground};
      border: 1px solid ${defBorder};
      border-radius: 10px;
      color: ${defColor};
      font-weight: 600;
      width: ${defWidth}px;
      height: ${defHeight}px;
      transition: all 0.2s ease;
      box-shadow: 0px 3px ${colors.seaBlue};
      &:hover {
        background: ${"#0026CA"};
      }
        &:active{
        box-shadow: 0px 0px ${colors.seaBlue};
        transform: translateY(3px);
        }
    `;
  } else {
    var Button = styled.button`
      background: none;
      border: 1px solid ${colors.disabledColor};
      border-radius: 10px;
      color: ${colors.disabledColor};
      font-weight: 600;
      width: ${defWidth}px;
      height: ${defHeight}px;
      transition: all 0.2s ease;
    `;
  }
  return (
    <Button onClick={() => onClick()} disabled={isDisabled}>
      {text}
    </Button>
  );
};
