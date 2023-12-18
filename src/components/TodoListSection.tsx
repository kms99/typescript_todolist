import React from 'react';
import * as St from './Todo.styled';
import { TTodo } from '../types/types';
import TodoItem from './TodoItem';

interface TodoSectionProps {
  sectionTitle: string;
  sectionList?: TTodo[];
}

const TodoListSection = ({ sectionTitle, sectionList }: TodoSectionProps) => {
  return (
    <St.ListSection>
      <St.ListSectionTitle>{sectionTitle}</St.ListSectionTitle>

      {sectionList?.length !== 0 ? (
        <St.ListUl>{sectionList?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}</St.ListUl>
      ) : (
        <St.NoListH3>등록된 정보가 없습니다.</St.NoListH3>
      )}
    </St.ListSection>
  );
};

export default TodoListSection;
