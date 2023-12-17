import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTodoHandle, deleteTodoHandle, getTodoHandle, updateTodoHandle } from '../axios/todos';

export const useTodos = () => {
  const queryClient = useQueryClient();

  const { data: toDoData } = useQuery({
    queryKey: ['toDoData'],
    queryFn: getTodoHandle
  });

  const addMutaion = useMutation({
    mutationFn: addTodoHandle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDoData'] });
    }
  });

  const deleteMutaion = useMutation({
    mutationFn: deleteTodoHandle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDoData'] });
    }
  });

  const updateMutaion = useMutation({
    mutationFn: updateTodoHandle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDoData'] });
    }
  });

  return {
    toDoData,
    addHandler: addMutaion.mutate,
    deleteHandler: deleteMutaion.mutate,
    updateHanler: updateMutaion.mutate
  };
};
