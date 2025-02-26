import { FC, useId, useState, useRef } from "react";

import styled from "styled-components";
import styles from "./index.module.scss";
import {motion, AnimatePresence} from 'framer-motion'

import { X_button } from "../../buttons/closeButtons/x-button/X-button";

const StyledFIeldset = styled.fieldset<{ isError: boolean }>`
  border-top: 2px solid ${({ isError }) => (isError ? "#eb5252" : "#a6a6a6")};
  border-radius: 2px;
  display: inline-block;
  padding: 0px 30px 0px 15px;
  color: ${({ isError }) => (isError ? "#eb5252" : "inherit")};
  font-weight: ${({ isError }) => (isError ? "600" : "inherit")};
`;

const StyledInput = styled.input<{
  isError: boolean;
  height: number;
  width: number;
}>`
  background-color: #fff;
  border: 2px solid ${({ isError }) => (isError ? "#eb5252" : "#a6a6a6")};
  border-radius: 4px;
  color: ${({ isError }) => (isError ? "rgb(125, 48, 48)" : "black")};
  padding: 8px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${({ isError }) => (isError ? "#eb5252" : "#a6a6a6")};
  }

  ${({ isError }) =>
    isError ? "" : "&:focus-visible {border: 2px solid #73a2ff;}"}
`;

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
  height = 30,
  width = 200,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const inputId = useId();

  const clearInputValue = () => {
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <StyledFIeldset isError={isError} className={styles.container}>
      <legend>
        <label htmlFor={inputId}>{title}</label>
      </legend>
      <StyledInput
        ref={inputRef}
        id={inputId}
        placeholder={placeHolder}
        value={inputValue}
        isError={isError}
        height={height}
        width={width}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <AnimatePresence>
      {inputValue && <motion.div 
      className={styles.closeBTN}
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
      >
        <X_button funcToClose={clearInputValue} />
      </motion.div>}
      </AnimatePresence>
    </StyledFIeldset>
  );
};
