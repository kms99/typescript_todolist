import React from 'react';
import * as St from '../Todo.styled';

interface ButtonProps {
  clickHandler?: () => void;
  text: string;
  type: ButtonType;
}

export enum ButtonType {
  fill,
  empty
}

const Button = ({ clickHandler, text, type }: ButtonProps) => {
  return (
    <St.Button onClick={clickHandler} $styleType={type}>
      {text}
    </St.Button>
  );
};

export default Button;
