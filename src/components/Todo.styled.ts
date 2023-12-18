import styled from 'styled-components';
import { ButtonType, OpenModal } from '../types/enum';

const MainWrapper = styled.div`
  max-width: 120rem;
  min-width: 80rem;
  margin: auto;
  height: 100%;
  min-height: calc(100vh - 15rem);
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  position: relative;
  margin-bottom: 1rem;
  & h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  & > button {
    z-index: 1;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  margin-top: 5rem;

  & section {
    margin-bottom: 1rem;
    & > a {
      margin: 0 1rem;
    }
  }
`;

const Button = styled.button<{ $styleType: ButtonType }>`
  background-color: ${(props) => {
    switch (props.$styleType) {
      case ButtonType.empty:
        return 'transparent';
      case ButtonType.fill:
        return '#717a7d';
      default:
        return 'transparent';
    }
  }};

  border: 2px solid #717a7d;

  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => {
      switch (props.$styleType) {
        case ButtonType.empty:
          return '#717a7d';
        case ButtonType.fill:
          return '#57606d';
        default:
          return '#717a7d';
      }
    }};

    border-color: ${(props) => {
      switch (props.$styleType) {
        case ButtonType.empty:
          return '#717a7d';
        case ButtonType.fill:
          return '#57606d';
        default:
          return '#FFFFFF';
      }
    }};
  }
`;

const InputForm = styled.form<{ $isOpen: OpenModal }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  height: ${(props) => (props.$isOpen ? '17rem' : 0)};
  transform: translate(0, ${(props) => (props.$isOpen ? 0 : '-50%')});
  overflow: hidden;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: ease-in 0.3s;
  z-index: 0;
`;

const InputSection = styled.section<{ $value: string }>`
  position: relative;
  margin-bottom: 2rem;
  font-size: 2rem;

  &:focus-within {
    & label {
      top: 0;
      left: 0;
      transform: translate(0, -100%);
      font-size: 1.2rem;
    }
  }

  & label {
    position: absolute;
    top: ${(props) => (props.$value ? 0 : '50%')};
    left: translate(0, ${(props) => (props.$value ? 0 : '0.5rem')});
    transform: translate(0, ${(props) => (props.$value ? '-100%' : '-50%')});
    font-size: ${(props) => (props.$value ? '1.2rem' : 'inherit')};
    transition: ease-in 0.3s;
  }

  & input {
    width: 100%;
    font-size: inherit;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
    background: none;
  }
`;

const ListUl = styled.ul`
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 20rem);
  row-gap: 1rem;
`;

const ItemLi = styled.li`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: transparent;
  border: 2px solid black;
  padding: 1rem;

  & h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    border-bottom: 2px solid black;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    height: 10rem;
    width: 100%;
    word-break: break-all;
    overflow-y: scroll;
  }

  & p::-webkit-scrollbar {
    width: 0;
  }

  & section {
    align-self: center;
    display: flex;
    & > button {
      font-size: 1.4rem;
    }
    & > button + button {
      margin-left: 0.5rem;
    }
  }
`;

const ListSection = styled.section`
  & + section {
    margin-top: 2rem;
  }
`;

const ListSectionTitle = styled.span`
  display: inline-block;
  font-size: 3rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  font-weight: bold;
`;

const NoListH3 = styled.h3`
  font-size: 2rem;
  margin-left: 1rem;
`;

const ProgressBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  MainWrapper,
  Header,
  Button,
  InputForm,
  InputSection,
  ListUl,
  ItemLi,
  ListSectionTitle,
  ListSection,
  NoListH3,
  Footer,
  ProgressBackDrop
};
