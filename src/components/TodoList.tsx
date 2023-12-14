import React from 'react';
import { TTodo } from '../types/types';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/config';

const TodoList = () => {
  const toDos = useSelector((state: RootState) => state.toDoSlice.todos);

  const { doneList, notDoneList } = toDos.reduce(
    (accTodo, currentTodo) => {
      currentTodo.isDone ? accTodo.doneList.push(currentTodo) : accTodo.notDoneList.push(currentTodo);
      return { ...accTodo };
    },
    { doneList: [] as TTodo[], notDoneList: [] as TTodo[] }
  );

  return (
    <div>
      <span>Not Done!</span>
      <ul>
        {notDoneList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <span>Done!!</span>
      <ul>
        {doneList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
