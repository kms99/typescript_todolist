import React from 'react';
import { TTodo } from '../types/types';
import { useTodos } from '../hooks/useTodos';
import TodoListSection from './TodoListSection';

interface FilterTodoType {
  doneList: TTodo[];
  notDoneList: TTodo[];
}

const TodoList = () => {
  const { toDoData } = useTodos();

  const filteredToDos: FilterTodoType | undefined = toDoData?.reduce(
    (accTodo, currentTodo) => {
      currentTodo.isDone ? accTodo.doneList.push(currentTodo) : accTodo.notDoneList.push(currentTodo);
      return { ...accTodo };
    },

    { doneList: [] as TTodo[], notDoneList: [] as TTodo[] }
  );

  return (
    <div>
      <TodoListSection sectionTitle="Not Done!" sectionList={filteredToDos?.notDoneList} />
      <TodoListSection sectionTitle="Done!" sectionList={filteredToDos?.doneList} />
    </div>
  );
};

export default TodoList;
