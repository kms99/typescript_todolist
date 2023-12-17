import React from 'react';
import * as St from '../Todo.styled';

interface InputProps {
  typeId: string;
  labelText: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ typeId, labelText, value, setValue }: InputProps) => {
  return (
    <St.InputSection $value={value}>
      <label htmlFor={typeId}>{labelText}</label>
      <input id={typeId} value={value} onChange={setValue} />
    </St.InputSection>
  );
};

export default Input;
