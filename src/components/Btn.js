import { useState } from "react";
import Bank from "./BankBook";
import * as S from "../style/style";

export default function Btn() {
  const [point, setPoint] = useState(1000000);
  const [page, setPage] = useState(true);
  const money = point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const Btn1 = () => {
    const rand = Boolean(Math.round(Math.random()));

    if (rand == false) {
      const randomMoney = Math.floor(Math.random() * 900000 + 1);
      setPoint(point - randomMoney);
    } else if (rand == true) {
      const randomMoney = Math.floor(Math.random() * 500000 + 1);
      setPoint(point + randomMoney);
    }
    if (point <= 0) {
      alert("대출을 받으시겠습니까?");
    }
  };
  const BankBook = () => {
    setPage(!page);
  };
  const Reset = () => {
    window.location.reload();
  };
  return (
    <div>
      {page ? (
        <S.Board>
          <S.Life>인생역전</S.Life>
          <S.MoneyBox>
            <S.Money>Your money : {money}₩</S.Money>
          </S.MoneyBox>

          <button onClick={Btn1}>Btn1</button>
          <button onClick={BankBook}>통장 잔고 보기</button>
        </S.Board>
      ) : (
        <Bank page={page} setPage={setPage} />
      )}
    </div>
  );
}
