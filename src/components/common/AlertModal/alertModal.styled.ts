import styled from 'styled-components';

const BackDropContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: ${(props) => (props.$isOpen ? 10 : -10)};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: 0.3s;
`;

const AlertModalContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
  z-index: ${(props) => (props.$isOpen ? 10 : -10)};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  min-width: 50rem;
  padding: 2rem;
  background: #ffffff;
  color: #110f12;
  border-radius: 10px;

  & h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid black;
  }

  & p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  & button + button {
    margin-left: 2rem;
  }
`;

export { BackDropContainer, AlertModalContainer };
