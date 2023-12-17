import React from 'react';
import * as St from './alertModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/config';
import { closeAlert } from '../../../redux/modules/AlertSlice';

const BackDrop = () => {
  const alertInfo = useSelector((state: RootState) => state.AlertSlice);
  const dispatch = useDispatch<AppDispatch>();

  const backDropClickHandler = () => {
    dispatch(closeAlert());
  };
  return <St.BackDropContainer $isOpen={alertInfo.isOpen} onClick={backDropClickHandler} />;
};

export default BackDrop;
