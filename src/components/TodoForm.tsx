import React from 'react';
import useInput from '../hooks/useInput';
import { EIsDone } from '../types/types';
import { useTodos } from '../hooks/useTodos';
import { OpenModal } from './Header';
import * as St from './Todo.styled';
import Input from './common/Input';
import Button, { ButtonType } from './common/Button';
import useAlert from '../hooks/useAlert';

interface FromProps {
  isOpen: OpenModal;
  setOpenInputForm: (value: OpenModal) => void;
}

const TodoForm = ({ isOpen, setOpenInputForm }: FromProps) => {
  const { openAlertHandler } = useAlert();

  const { addHandler } = useTodos();

  const [context, setContext, resetContext] = useInput();

  const [title, setTitle, resetTitle] = useInput();

  const onSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const title = (target[0] as HTMLFormElement).value;
    const contents = (target[1] as HTMLFormElement).value;

    if (!title || !contents) {
      openAlertHandler({ title: '입력오류', message: '모든 값을 입력하세요' });
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      contents,
      isDone: EIsDone.UN_DONE
    };

    addHandler(newTodo);
    resetContext();
    resetTitle();
    setOpenInputForm(OpenModal.CLOSE);
  };

  return (
    <St.InputForm onSubmit={onSubmitTodo} $isOpen={isOpen}>
      <Input typeId="title" labelText="제목" value={title} setValue={setTitle} />
      <Input typeId="context" labelText="내용" value={context} setValue={setContext} />
      <Button text="등록하기" type={ButtonType.fill} />
    </St.InputForm>
  );
};

export default TodoForm;
