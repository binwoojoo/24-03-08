var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (true) {
  var choice = +prompt(
    `${tvxq}\n메뉴를 선택하세요 \n1.새로운 이름 추가 \n2.기존 멤버 삭제 \n3.프로그램 종료`
  );
  if (choice === 1) {
    var newMember = prompt(`새로운 멤버 이름을 입력하세요`);
    tvxq.push(newMember);
    alert(`수정완료!!`);
  } else if (choice === 2) {
    var outMember = prompt(`현재멤버:${tvxq}\n삭제할 멤버를 입력해주세요`);
    if (tvxq.includes(outMember)) {
      tvxq.splice(tvxq.indexOf(outMember), 1);
    } else {
      alert(`${outMember}는 잘못된 이름입니다.`);
      continue;
    }
    alert(`${outMember} 삭제완료!!`);
  } else if (choice === 3) {
    alert("프로그램을 종료합니다.");
    break;
  } else {
    alert(`1~3의 메뉴 중 하나를 숫자로 입력하세요.`);
  }
}
