import styled from "styled-components";

export const ModalBody = styled.div`
  width: 480px;
  height: min-content;
  padding: 1rem 10% 2rem 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100vw;
    padding: 1rem 5% 2rem 5%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Footer = styled(Header)`
  margin-top: 1rem;
  margin-bottom: initial;
`;
