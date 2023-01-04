import { useState } from "react";
import * as S from "../style/style";
import Bg from "./bg";

export default function Store({
  moneys,
  chance,
  setChance,
  setMoneys,
  setOnOff,
  onOff,
  persen,
  setPersen,
  store,
  setStore,
}) {
  // const opportunity = 30000;
  const [opportunity, setOpportunity] = useState(30000);
  const [persent, setPersent] = useState(1000000);
  const buy = () => {
    console.log(moneys, opportunity);
    if (moneys >= chance) {
      console.log(Number(moneys) - Number(opportunity));

      setChance(chance + 1);
      setOpportunity(opportunity * 1.5);
      setMoneys(Number(moneys) - Number(opportunity));
    } else {
      alert("돈이 부족합니다");
    }
    if (chance == 0) {
      setOnOff(false);
    }
  };

  const persentBuy = () => {
    if (moneys >= persent) {
      setPersen(persen + 0.02);
      setMoneys(moneys - persent);
    } else if (moneys <= 0) {
      alert("돈이 부족합니다.");
    }
  };

  const Home = () => {
    setStore(!store);
  };
  return (
    <>
      <Bg />
      <S.Modal>
        <S.Content>
          <div>
            <h1>상점</h1>
            <p>기회권 : {opportunity}원</p>
            <button onClick={buy}>기회권 구매하기</button>
            <p>확률 올리기 : {persent}원</p>
            <button onClick={persentBuy}>확률권 구매하기</button>
          </div>
          <button onClick={Home}>홈으로</button>
        </S.Content>
      </S.Modal>
    </>
  );
}
