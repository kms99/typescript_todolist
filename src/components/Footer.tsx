import React from 'react';
import * as St from './Todo.styled';
import { ReactComponent as GitHub } from '../styles/image/github.svg';
import { ReactComponent as Tistory } from '../styles/image/tistory.svg';
const Footer = () => {
  return (
    <St.Footer>
      <section>
        <a href="https://github.com/kms99/typescript_todolist">
          <GitHub />
        </a>
        <a href="https://audtjqxx.tistory.com/">
          <Tistory />
        </a>
      </section>
      <span>Copyright ©2023 todolist_reactQuery_ver. All rights reserved.</span>
    </St.Footer>
  );
};

export default Footer;
