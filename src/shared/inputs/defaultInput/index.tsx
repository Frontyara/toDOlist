import { FC, useId } from "react";
import styled from "styled-components";

interface stylesInput {
  isError: boolean;
  title: string;
  placeHolder: string;
  height?: number;
  width?: number;
}

export const DefaultInput: FC<stylesInput> = ({
  isError,
  title,
  placeHolder,
  height,
  width,
}) => {
  const inputId = useId();

  const defHeight: number = height || 30;
  const defWidth: number = width || 200;

  if (!isError) {
    var StyledFIeldset = styled.fieldset`
    border-top: 2px solid #a6a6a6;
    border-radius: 2px;
    display: inline-block;
    padding: 0px 15px 0px 15px;
    `

    var StyledInput = styled.input`
      background-color: #fff;
      border: 2px solid #a6a6a6;
      border-radius: 4px;
      color: black;
      padding: 8px;
      height: ${defHeight}px;
      width: ${defWidth}px;
      transition: all 0.2s ease;
      &::placeholder {
        color: #a6a6a6;
      }
      &:focus-visible {
        border: 2px solid #73a2ff;
      }
    `;
  } else{
    var StyledFIeldset = styled.fieldset`
    border-top: 2px solid #EB5252;
    border-radius: 2px;
    color: #EB5252;
    display: inline-block;
    font-weight: 600;
    padding: 0px 15px 0px 15px;
    `

    var StyledInput = styled.input`
    background-color: #fff;
    border: 2px solid #EB5252;
    border-radius: 4px;
    color:rgb(125, 48, 48);
    padding: 8px;
    height: ${defHeight}px;
    width: ${defWidth}px;
    transition: all 0.2s ease;
    &::placeholder{
    color: #EB5252;
    }
    `
  }
  return (
    <>
      <StyledFIeldset>
        <legend>
          <label htmlFor={inputId}>{title}</label>
        </legend>
        <StyledInput id={inputId} placeholder={placeHolder} />
      </StyledFIeldset>
    </>
  );
};
