import * as S from "../style/style";
import { useState, useRef } from "react";
export default function BoardBtn() {
  const [Count, setCount] = useState(0);
  const [stop, setStop] = useState();
  const [openClose, setOpenClose] = useState(false);

  const GameStart = () => {
    setStop(
      setInterval(() => {
        setCount(number => number + 1);
      }, 1000)
    );
    setOpenClose(!openClose);
  };

  const GameStop = () => {
    clearInterval(stop);
    setOpenClose(!openClose);
  };
  return (
    <S.BoardBtn>
      시간 : {Count}
      <S.Btns>
        <S.StartBtn onClick={GameStart} disabled={openClose}>
          게임시작
        </S.StartBtn>
        <S.StopBtn onClick={GameStop}>게임 중지</S.StopBtn>
      </S.Btns>
    </S.BoardBtn>
  );
}
