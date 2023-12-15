import React from 'react';
import useInput from '../hooks/useInput';
// import { useDispatch } from 'react-redux';
import { EIsDone, TTodo } from '../types/types';
// import { useTodos } from '../hooks/useTodos';
import { __addTodos } from '../redux/modules/todosSlices';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/config';
// import { addTodo } from '../redux/modules/todosSlices';

const TodoForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const { addTodo } = useTodos();

  const [contents, setContents] = useInput();

  const [title, setTitle] = useInput();

  const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const title = (target[0] as HTMLFormElement).value;
    const contents = (target[1] as HTMLFormElement).value;

    const newTodo = {
      id: Date.now(),
      title,
      contents,
      isDone: EIsDone.UN_DONE
    };

    dispatch(__addTodos({ newTodo }));
  };

  return (
    <form onSubmit={onSubmitTodo}>
      <input value={title} onChange={setTitle} />
      <input value={contents} onChange={setContents} />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
