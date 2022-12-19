import { useState } from "react";
import Bank from "./BankBook";
import * as S from "../style/style";

export default function Btn() {
  const [bankMoney, setBankMoney] = useState(1000000);
  const [moneys, setMoneys] = useState(0);
  const [page, setPage] = useState(true);
  const [outMoney, setOutMoney] = useState(0);

  const money = moneys.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const Btn1 = () => {
    const rand = Boolean(Math.round(Math.random()));
    if (money == 0) {
      alert("통장에서 출금하십시요");
      window.location.replace("/");
    } else if (rand == false) {
      const randomMoney = Math.floor(Math.random() * 900000 + 1);
      setMoneys(moneys - randomMoney);
    } else if (rand == true) {
      const randomMoney = Math.floor(Math.random() * 500000 + 1);
      setMoneys(moneys + randomMoney);
    }
  };

  const BankBook = () => {
    setPage(!page);
  };

  return (
    <div>
      <S.Board>
        <S.Life>인생역전</S.Life>
        <S.MoneyBox>
          <S.Money>Your money : {money}₩</S.Money>
        </S.MoneyBox>
        <p>버튼 누를수 있는 기회 : </p>
        <button onClick={Btn1}>Btn1</button>
        <button onClick={BankBook}>통장 잔고 보기</button>

        {page ? null : (
          <Bank
            page={page}
            setPage={setPage}
            bankMoney={bankMoney}
            outMoney={outMoney}
            setOutMoney={setOutMoney}
            moneys={moneys}
            setMoneys={setMoneys}
            setBankMoney={setBankMoney}
          />
        )}
      </S.Board>
    </div>
  );
}
