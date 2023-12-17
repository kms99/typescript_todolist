import React from 'react';
import { TTodo } from '../types/types';
import TodoItem from './TodoItem';
import { useTodos } from '../hooks/useTodos';

const TodoList = () => {
  interface FilterTodoType {
    doneList: TTodo[];
    notDoneList: TTodo[];
  }

  const { toDoData } = useTodos();

  const filterdTodos: FilterTodoType | undefined = toDoData?.reduce(
    (accTodo, currentTodo) => {
      currentTodo.isDone ? accTodo.doneList.push(currentTodo) : accTodo.notDoneList.push(currentTodo);
      return { ...accTodo };
    },

    { doneList: [] as TTodo[], notDoneList: [] as TTodo[] }
  );

  return (
    <div>
      <span>Not Done!</span>
      <ul>{filterdTodos?.notDoneList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}</ul>

      <span>Done!!</span>
      <ul>{filterdTodos?.doneList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}</ul>
    </div>
  );
};

export default TodoList;
