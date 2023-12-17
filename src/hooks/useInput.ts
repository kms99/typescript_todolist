import React, { useState } from 'react';

type IUseInput = [
  value: string,
  changeValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  resetValue: () => void
];

const useInput = (): IUseInput => {
  const [value, setValue] = useState(''); // 초기값 설정 시 자동 타입 설정

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue('');
  };

  return [value, changeValueHandler, resetValue];
};

export default useInput;
