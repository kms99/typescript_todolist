import React, { useState } from 'react';
import TodoForm from './TodoForm';
import * as St from './Todo.styled';
import Button from './common/Button';
import { ButtonType, OpenModal } from '../types/enum';
import Progress from './common/Progress';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/config';

const Header = () => {
  const [openInputForm, setOpenInputForm] = useState<OpenModal>(OpenModal.CLOSE);

  const isLoading = useSelector((state: RootState) => state.LoadingSlice.isLoading);

  const handleFormOpen = () => {
    setOpenInputForm((prev) => (prev ? OpenModal.CLOSE : OpenModal.OPEN));
  };

  return (
    <St.Header>
      {isLoading && <Progress />}
      <h1>ReactQuery TodoList</h1>
      <Button clickHandler={handleFormOpen} text="TODO 작성하기" type={ButtonType.empty} />
      <TodoForm isOpen={openInputForm} setOpenInputForm={setOpenInputForm} />
    </St.Header>
  );
};

export default Header;
