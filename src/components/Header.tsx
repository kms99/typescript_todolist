import React, { useState } from 'react';
import TodoForm from './TodoForm';
import * as St from './Todo.styled';
import Button, { ButtonType } from './common/Button';
import AlertModal from './common/AlertModal/AlertModal';

export enum OpenModal {
  CLOSE,
  OPEN
}

const Header = () => {
  const [openInputForm, setOpenInputForm] = useState<OpenModal>(OpenModal.CLOSE);

  const handleFormOpen = () => {
    setOpenInputForm((prev) => (prev ? OpenModal.CLOSE : OpenModal.OPEN));
  };

  return (
    <St.Header>
      <h1>ReactQuery TodoList</h1>
      <Button clickHandler={handleFormOpen} text="TODO 작성하기" type={ButtonType.empty} />
      <TodoForm isOpen={openInputForm} setOpenInputForm={setOpenInputForm} />
    </St.Header>
  );
};

export default Header;
