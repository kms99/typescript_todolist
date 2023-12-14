import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodoHandle, deleteTodoHandle, getTodoHandle, updateTodoHandle } from '../axios/todos';
import { EIsDone, TTodo } from '../types/types';
import { setTodo } from '../redux/modules/todosSlices';

export const useTodos = () => {
  const dispatch = useDispatch();

  const getTodo = async (): Promise<void> => {
    const todoData = await getTodoHandle();
    if (typeof todoData !== 'undefined') dispatch(setTodo(todoData));
  };

  const addTodo = async (newTodo: TTodo): Promise<void> => {
    await addTodoHandle(newTodo);
    await getTodo();
  };

  const deleteTodo = async (targetId: number): Promise<void> => {
    await deleteTodoHandle(targetId);
    await getTodo();
  };

  const updateTodo = async (targetId: number, changeDone: EIsDone): Promise<void> => {
    await updateTodoHandle(targetId, changeDone);
    await getTodo();
  };

  return { getTodo, addTodo, deleteTodo, updateTodo };
};
