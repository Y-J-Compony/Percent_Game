import * as S from "../style/style";

export default function BankBook({ page, setPage }) {
  const goToHome = () => {
    setPage(!page);
  };
  return (
    <S.Bank>
      <S.BankBook>
        <S.Balance>통잔잔고 : </S.Balance>
        <S.Button>
          <S.Home onClick={goToHome}>홈으로</S.Home>
        </S.Button>
      </S.BankBook>
    </S.Bank>
  );
}
