import { useState } from "react";
import Bank from "./BankBook";
import * as S from "../style/style";
import Store from "../page/Store";
import { number } from "prop-types";

export default function Btn() {
  const [bankMoney, setBankMoney] = useState(1000000);
  const [moneys, setMoneys] = useState(100000);
  const [page, setPage] = useState(true);
  const [store, setStore] = useState(true);
  const [outMoney, setOutMoney] = useState(0);
  const [chance, setChance] = useState(3);
  const [onOff, setOnOff] = useState(false);
  const [inMoney, setInMoney] = useState(0);
  const [identity, setIdentity] = useState("");

  const goStore = () => {
    setStore(!store);
  };
  const money = moneys.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const Btn1 = () => {
    const rand = Boolean(Math.round(Math.random()));
    console.log(moneys);
    if (money == 0) {
      alert("통장에서 출금하십시요");
      window.location.replace("/sectionTwo#sectionTwo");
    }
    // else if (rand == false) {
    //   const randomMoney = Math.floor(Math.random() * 9000 + 1);
    //   setMoneys(moneys - randomMoney);

    //   setChance(chance - 1);
    // } else if (rand == true) {
    //   const randomMoney = Math.floor(Math.random() * 8000 + 1);
    //   setMoneys(moneys + randomMoney);
    //   setChance(chance - 1);
    // }
    else if (rand == true) {
      setMoneys(moneys * 2);
    } else if (rand == false) {
      setMoneys(0);
    }
    if (chance == 1) {
      console.log(chance);
      setOnOff(true);
    }
  };

  const BankBook = () => {
    setPage(!page);
  };
  const Deposit = () => {
    if (inMoney >= 0) {
      console.log(moneys - inMoney);
      if (moneys < inMoney) {
        alert("돈이 부족합니다.");
      } else {
        setMoneys(moneys - inMoney); //inmoney를 통장에 +
        setBankMoney(Number(bankMoney) + Number(inMoney));
      }
    } else {
      alert("돈 없어");
    }
  };

  const onChange = el => {
    setInMoney(el.target.value);
  };

  return (
    <div>
      <S.Board>
        <S.Life>인생역전</S.Life>

        <S.MoneyBox>
          <S.Money>Your money : {money}₩</S.Money>
        </S.MoneyBox>
        <p>버튼 누를수 있는 기회 : {chance}</p>
        <button onClick={Btn1} disabled={onOff}>
          Btn1
        </button>
        <button onClick={BankBook}>통장 잔고 보기</button>

        <button onClick={Deposit}>입금하기</button>
        <input
          placeholder="입금하고 싶은 금액을 적으세요"
          onChange={onChange}
        ></input>
        <button onClick={goStore}>상점</button>
        {store ? null : (
          <Store
            moneys={moneys}
            chance={chance}
            onOff={onOff}
            setChance={setChance}
            setMoneys={setMoneys}
            setOnOff={setOnOff}
          />
        )}
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
