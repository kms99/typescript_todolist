import React from 'react';
import { useDispatch } from 'react-redux';
import store, { AppDispatch } from '../redux/config';
import { closeAlert, openAlert, openConfirm } from '../redux/modules/AlertSlice';

interface AlertArgs {
  title: string;
  message: string;
}

const useAlert = () => {
  const dispatch = useDispatch<AppDispatch>();

  const closeAlertHandler = () => {
    dispatch(closeAlert());
  };

  const openConfirmHandler = (alertInfo: AlertArgs) => {
    return new Promise((res) => {
      dispatch(openConfirm(alertInfo));
      const unsubscribe = store.subscribe(() => {
        const result = store.getState().AlertSlice.result;
        res(result);
        unsubscribe();
      });
    });
  };

  const openAlertHandler = (alertInfo: AlertArgs) => {
    dispatch(openAlert(alertInfo));
  };

  return { closeAlertHandler, openAlertHandler, openConfirmHandler };
};

export default useAlert;
