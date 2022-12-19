export default function Store({
  moneys,
  chance,
  setChance,
  setMoneys,
  setOnOff,
  onOff,
}) {
  const opportunity = 30000;
  const buy = () => {
    console.log(moneys, opportunity);
    if (moneys >= chance) {
      console.log(Number(moneys) - Number(opportunity));
      setChance(chance + 1);
      setMoneys(Number(moneys) - Number(opportunity));
    } else {
      alert("돈이 부족합니다");
    }
    if (chance == 0) {
      setOnOff(false);
    }
  };
  return (
    <div>
      <h1>상점</h1>
      <p>기회권 : {opportunity}원</p>
      <button onClick={buy}>기회권 구매하기</button>
    </div>
  );
}
