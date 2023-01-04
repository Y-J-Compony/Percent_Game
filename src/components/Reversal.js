import { useState } from "react";
import Bank from "./BankBook";
import * as S from "../style/style";
import Store from "./Store";
import "../style/style2.css";

export default function Btn() {
  const [bankMoney, setBankMoney] = useState(1000000);
  const [moneys, setMoneys] = useState(0);
  const [page, setPage] = useState(true);
  const [store, setStore] = useState(true);
  const [outMoney, setOutMoney] = useState(0);
  const [chance, setChance] = useState(3);
  const [onOff, setOnOff] = useState(false);
  const [inMoney, setInMoney] = useState(0);
  const [persen, setPersen] = useState(1);
  const [double, setDouble] = useState(1.5);

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
    } else if (Math.random() < persen) {
      setMoneys(moneys * double);
      setDouble(double + 0.5);

      setPersen(persen - 0.25);
      if (persen <= 0.25) {
        setPersen(persen - 0.05);
        setDouble(double + 1);
      }
      setChance(chance - 1);
    } else {
      setMoneys(moneys - moneys);
      setChance(chance - 1);
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
  const seePersen = Math.floor(persen * 100);
  return (
    <div>
      <S.Board>
        <S.Life>인생나락</S.Life>
        <div className="확율박스">
          <div className="확율space">
            <span className="확률">확률 : {seePersen}%</span>
            <span className="배율">{double}배</span>
          </div>
        </div>
        <S.MoneyBox>
          <S.Money>Your money : {money}₩</S.Money>
        </S.MoneyBox>
        <span className="chance">버튼 누를수 있는 기회 : {chance}</span>
        <div className="버튼센터">
          <div className="통장잔고" onClick={BankBook}>
            통장 잔고 보기
          </div>
          <div className="button" onClick={Btn1} disabled={onOff}>
            버튼
          </div>
        </div>
        <div className="입금박스">
          <input
            className="input"
            placeholder="입금하고 싶은 금액을 입력해주세요"
            onChange={onChange}
          ></input>
          <div className="입금하기" onClick={Deposit}>
            입금하기
          </div>
        </div>
        <div className="상점" onClick={goStore}>
          상점
        </div>
        {store ? null : (
          <Store
            moneys={moneys}
            chance={chance}
            onOff={onOff}
            setChance={setChance}
            setMoneys={setMoneys}
            setOnOff={setOnOff}
            persen={persen}
            setPersen={setPersen}
            setStore={setStore}
            store={store}
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
