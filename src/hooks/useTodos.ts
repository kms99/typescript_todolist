import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTodoHandle, deleteTodoHandle, getTodoHandle, updateTodoHandle } from '../axios/todos';

export const useTodos = () => {
  const queryClient = useQueryClient();

  const { isLoading: toDoDataLoading, data: toDoData } = useQuery({
    queryKey: ['toDoData'],
    queryFn: getTodoHandle
  });

  const addMutation = useMutation({
    mutationFn: addTodoHandle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDoData'] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTodoHandle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDoData'] });
    }
  });

  const updateMutation = useMutation({
    mutationFn: updateTodoHandle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toDoData'] });
    }
  });

  return {
    toDoData,
    toDoDataLoading,
    addHandler: addMutation.mutate,
    deleteHandler: deleteMutation.mutate,
    updateHandler: updateMutation.mutate
  };
};
