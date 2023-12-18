import React from 'react';
import { PropagateLoader } from 'react-spinners';
import { ProgressBackDrop } from '../Todo.styled';

const Progress = () => {
  //   const isLoading = useSelector((state: RootState) => state.LoadingSlice.isLoading);
  return (
    <ProgressBackDrop>
      <div>
        <PropagateLoader loading={true} />
      </div>
    </ProgressBackDrop>
  );
};

export default Progress;
