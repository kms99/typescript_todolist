import React from 'react';
import * as St from '../Todo.styled';
import { ButtonType } from '../../types/enum';

interface ButtonProps {
  clickHandler?: () => void;
  text: string;
  type: ButtonType;
}

const Button = ({ clickHandler, text, type }: ButtonProps) => {
  return (
    <St.Button onClick={clickHandler} $styleType={type}>
      {text}
    </St.Button>
  );
};

export default Button;
