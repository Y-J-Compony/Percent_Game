import * as S from "../style/style";
import Bg from "./bg";
import "../style/style2.css";

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
  const onChange = (el) => {
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
            <div className="top">통장 잔고 보기</div>
            <span className="모달통장잔고">통잔잔고 : {money}₩</span>
            <div className="모달인풋">
              <input
                className="모달출금"
                placeholder="출금 금액 입력 "
                onChange={onChange}
              ></input>
              <div className="출금하기" onClick={withdrawal}>
                출금하기
              </div>
            </div>
            <div className="all" onClick={everyMoney}>
              모든 돈 다 출금하기
            </div>
            <div className="홈으로" onClick={goToHome}>
              창 닫기
            </div>
          </S.BankBook>
        </S.Bank>
      </S.Modal>
    </>
  );
}
