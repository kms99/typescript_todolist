import TodoBase from '../api/axios';
import { EIsDone, TTodo } from '../types/types';

export const getTodoHandle = async (): Promise<TTodo[] | void> => {
  try {
    const response = await TodoBase.get('/todos');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addTodoHandle = async (newTodo: TTodo): Promise<void> => {
  try {
    await TodoBase.post('/todos', newTodo);
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodoHandle = async (targetId: number): Promise<void> => {
  try {
    await TodoBase.delete(`/todos/${targetId}`);
  } catch (err) {
    console.log(err);
  }
};

export const updateTodoHandle = async (targetId: number, changeDone: EIsDone): Promise<void> => {
  try {
    await TodoBase.patch(`/todos/${targetId}`, { isDone: changeDone });
  } catch (err) {
    console.log(err);
  }
};
