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
export const Bank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const BankBook = styled.div`
  background: gray;
  width: 40vw;
  height: 90vh;
`;

export const Home = styled.button`
  width: 10vw;
  height: 5vh;
`;

export const Button = styled.div`
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const Balance = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2vh solid black;
  color: white;
`;
