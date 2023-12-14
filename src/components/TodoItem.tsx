import React from 'react';
import { EIsDone, TTodo } from '../types/types';
// import { useDispatch } from 'react-redux';
import { useTodos } from '../hooks/useTodos';
// import { deleteTodo, updateTodo } from '../redux/modules/todosSlices';

interface IProps {
  todo: TTodo;
}

const TodoItem = ({ todo }: IProps) => {
  // const dispatch = useDispatch();

  const { deleteTodo, updateTodo } = useTodos();

  const updateBtnClickHandler = () => {
    // dispatch(updateTodo(todo.id));
    updateTodo(todo.id, todo.isDone ? EIsDone.UN_DONE : EIsDone.DONE);
  };

  const deleteBtnClickHandler = () => {
    // dispatch(deleteTodo(todo.id));
    deleteTodo(todo.id);
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
