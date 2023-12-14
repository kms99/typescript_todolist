import React from 'react';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { EIsDone } from '../types/types';
import { addTodo } from '../redux/modules/todosSlices';

const TodoForm = () => {
  const dispatch = useDispatch();

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

    dispatch(addTodo(newTodo));
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
