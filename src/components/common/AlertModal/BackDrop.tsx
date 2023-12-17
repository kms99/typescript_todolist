import React from 'react';
import * as St from './alertModal.styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/config';

const BackDrop = () => {
  const checkOpen = useSelector((state: RootState) => state.AlertSlice.isOpen);
  return <St.BackDropContainer $isOpen={checkOpen} />;
};

export default BackDrop;
