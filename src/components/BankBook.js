import * as S from "../style/style";
import Bg from "./bg";

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
    if (outMoney >= 0) {
      console.log(bankMoney, outMoney);
      if (bankMoney < outMoney) {
        alert("통장에 있는 돈보다 더 큰 금액입니다.");
      } else {
        setMoneys(Number(outMoney) + Number(moneys));
        setBankMoney(Number(bankMoney) - Number(outMoney));
      }
    } else {
      alert("오류가 발생하였습니다");
    }
  };

  const everyMoney = () => {
    setBankMoney(bankMoney - bankMoney);
    setMoneys(moneys + bankMoney);
  };
  return (
    <>
      <Bg />
      <S.Modal>
        <S.Bank>
          <S.BankBook>
            <S.Balance>통잔잔고 : {money}₩</S.Balance>
            <input placeholder="출금 금액 입력 " onChange={onChange}></input>
            <button onClick={withdrawal}>출금하기</button>
            <button onClick={everyMoney}>모든 돈 다 출금하기</button>
            <S.Button>
              <S.Home onClick={goToHome}>홈으로</S.Home>
            </S.Button>
          </S.BankBook>
        </S.Bank>
      </S.Modal>
    </>
  );
}
