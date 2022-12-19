import styled from "styled-components";

//도박장 css
export const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  flex-direction: column;
`;

export const Money = styled.div`
  color: white;
  font-size: 1.5rem;
`;

export const MoneyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  width: 30vw;
  height: 20vh;
  margin-bottom: 5vh;
`;

export const Container = styled.div`
  display: flex;
`;

export const Life = styled.div`
  display: flex;
  align-items: center;
  height: 30vh;
  justify-content: center;
  font-size: 3rem;
  font-weight: bolder;
`;

/*_____________________________________________
모달창 css*/
export const Modal = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  animation: fadeInUp 1s;
  @keyframes fadeInUp {
    0% {
      opacity: 0.5;
      transform: translate3d(0, 50%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

export const Bank = styled.div`
  background-color: lightgray;
  width: 30vw;
  height: 80vh;
  border-radius: 50px;
  border: 2px solid black;
`;

export const BankBook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

export const Home = styled.button``;

export const Button = styled.div``;
export const Balance = styled.div``;
