import React from 'react';
import Button, { ButtonType } from '../Button';
import * as St from './alertModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/config';
import { alertType, closeAlert, confirmFalse, confirmTrue } from '../../../redux/modules/AlertSlice';

const AlertModalMainContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const alertInfo = useSelector((state: RootState) => state.AlertSlice);

  const confirmBtnClickHandler = () => {
    dispatch(confirmTrue());
    dispatch(closeAlert());
  };

  const cancelBtnClickHandler = () => {
    dispatch(confirmFalse());
    dispatch(closeAlert());
  };
  return (
    <St.AlertModalContainer $isOpen={alertInfo.isOpen}>
      <h1>{alertInfo.title}</h1>
      <p>{alertInfo.message}</p>
      <section>
        {alertInfo.type === alertType.confirm && (
          <Button text="취소" type={ButtonType.empty} clickHandler={cancelBtnClickHandler} />
        )}
        <Button text="확인" type={ButtonType.fill} clickHandler={confirmBtnClickHandler} />
      </section>
    </St.AlertModalContainer>
  );
};

export default AlertModalMainContainer;
