import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addTodoHandle, deleteTodoHandle, getTodoHandle, updateTodoHandle } from '../axios/todos';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/config';
import { setLoading } from '../redux/modules/LoadingSlice';

export const useTodos = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch<AppDispatch>();

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

  useEffect(() => {
    dispatch(setLoading(addMutation.isPending));
  }, [addMutation.isPending, dispatch]);

  useEffect(() => {
    dispatch(setLoading(deleteMutation.isPending));
  }, [deleteMutation.isPending, dispatch]);

  useEffect(() => {
    dispatch(setLoading(updateMutation.isPending));
  }, [updateMutation.isPending, dispatch]);

  useEffect(() => {
    dispatch(setLoading(toDoDataLoading));
  }, [toDoDataLoading, dispatch]);

  return {
    toDoData,
    addHandler: addMutation.mutate,
    deleteHandler: deleteMutation.mutate,
    updateHandler: updateMutation.mutate,
    toDoDataLoading,
    addPending: addMutation.isPending,
    deletePending: deleteMutation.isPending,
    updatePending: updateMutation.isPending
  };
};
