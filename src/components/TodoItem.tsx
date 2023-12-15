import React from 'react';
import { EIsDone, TTodo } from '../types/types';
import { useDispatch } from 'react-redux';
import { __deleteTodos, __updateTodos } from '../redux/modules/todosSlices';
import { AppDispatch } from '../redux/config';

interface IProps {
  todo: TTodo;
}

const TodoItem = ({ todo }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const updateBtnClickHandler = () => {
    dispatch(__updateTodos({ targetId: todo.id, changeDone: todo.isDone ? EIsDone.UN_DONE : EIsDone.DONE }));
  };

  const deleteBtnClickHandler = () => {
    dispatch(__deleteTodos(todo.id));
  };

  return (
    <li>
      <h2>{todo.title}</h2>
      <p>{todo.contents}</p>
      <button onClick={deleteBtnClickHandler}>삭제하기</button>
      <button onClick={updateBtnClickHandler}>{todo.isDone ? '취소하기' : '완료하기'}</button>
    </li>
  );
};

export default TodoItem;
