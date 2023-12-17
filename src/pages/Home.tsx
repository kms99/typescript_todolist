import React from 'react';
import TodoList from '../components/TodoList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as St from '../components/Todo.styled';

const Home = () => {
  return (
    <>
      <St.MainWrapper>
        <Header />
        <TodoList />
      </St.MainWrapper>
      <Footer />
    </>
  );
};

export default Home;
