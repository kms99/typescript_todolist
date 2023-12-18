import React from 'react';
import { TTodo } from '../types/types';
import { useTodos } from '../hooks/useTodos';
import * as St from './Todo.styled';
import Button from './common/Button';
import useAlert from '../hooks/useAlert';
import { ButtonType, EIsDone } from '../types/enum';

interface IProps {
  todo: TTodo;
}

const TodoItem = ({ todo }: IProps) => {
  const { openConfirmHandler } = useAlert();
  const { deleteHandler, updateHandler } = useTodos();

  const updateBtnClickHandler = () => {
    updateHandler({ targetId: todo.id, changeDone: todo.isDone ? EIsDone.UN_DONE : EIsDone.DONE });
  };

  const deleteBtnClickHandler = async () => {
    const result = await openConfirmHandler({ title: '삭제', message: '정말로 삭제하시겠습니까?' });
    if (!result) return;
    deleteHandler(todo.id);
  };

  return (
    <St.ItemLi>
      <h2>{todo.title}</h2>
      <p>{todo.contents}</p>
      <section>
        <Button clickHandler={deleteBtnClickHandler} text="삭제하기" type={ButtonType.empty} />
        <Button
          clickHandler={updateBtnClickHandler}
          text={todo.isDone ? '취소하기' : '완료하기'}
          type={ButtonType.fill}
        />
      </section>
    </St.ItemLi>
  );
};

export default TodoItem;
