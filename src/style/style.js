import styled from "styled-components";

//도박장 css
export const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Money = styled.div`
  color: white;
  font-size: 1.5rem;
  font-family: "Do Hyeon", sans-serif;
`;

export const MoneyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #82aae3;
  width: 30vw;
  height: 20vh;
`;

export const Container = styled.div`
  display: flex;
`;

export const Life = styled.div`
  margin-top: -15vw;
  display: flex;
  height: 15vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bolder;
  font-family: "Do Hyeon", sans-serif;
  color: #0a2647;
`;

/*_____________________________________________
모달창 css*/
export const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Bank = styled.div`
  background-color: lightgray;
  width: 30vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 2px solid gray;
  animation: fadeInUp 1s;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 50%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

export const BankBook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const Home = styled.button``;

export const Button = styled.div``;
export const Balance = styled.div``;

export const Body = styled.body`
  background-color: #eafdfc;
  height: 100vh;
`;

export const Content = styled.div`
  background-color: lightgray;
  width: 30vw;
  height: 85vh;
  border: 2px solid black;
  animation: fadeInUp 1s;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 50%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

export const Bg = styled.div`
  background-color: lightgray;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  position: fixed;
  top: 0;
`;
