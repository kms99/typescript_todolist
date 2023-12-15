import TodoBase from '../api/axios';
import { EIsDone, TTodo } from '../types/types';

export interface IUpdateArg {
  targetId: number;
  changeDone: EIsDone;
}

export const getTodoHandle = async (): Promise<TTodo[]> => {
  const response = await TodoBase.get('/todos');
  return response.data;
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

export const updateTodoHandle = async ({ targetId, changeDone }: IUpdateArg): Promise<void> => {
  try {
    await TodoBase.patch(`/todos/${targetId}`, { isDone: changeDone });
  } catch (err) {
    console.log(err);
  }
};
