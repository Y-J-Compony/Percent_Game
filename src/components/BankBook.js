import { useState } from "react";
import * as S from "../style/style";

export default function BankBook({
  page,
  setPage,
  bankMoney,
  outMoney,
  setOutMoney,
  moneys,
  setMoneys,
  setBankMoney,
}) {
  const money = bankMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const goToHome = () => {
    setPage(!page);
  };
  const onChange = el => {
    setOutMoney(el.target.value);
  };
  const withdrawal = () => {
    setMoneys(Number(outMoney) + Number(moneys));
    setBankMoney(Number(bankMoney) - Number(outMoney));
  };
  return (
    <S.Modal>
      <S.Bank>
        <S.BankBook>
          <S.Balance>통잔잔고 : {money}₩</S.Balance>
          <input placeholder="출금 금액 입력 " onChange={onChange}></input>
          <button onClick={withdrawal}>출금하기</button>
          <S.Button>
            <S.Home onClick={goToHome}>홈으로</S.Home>
          </S.Button>
        </S.BankBook>
      </S.Bank>
    </S.Modal>
  );
}
