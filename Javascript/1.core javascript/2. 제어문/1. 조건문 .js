
// 랜덤 정수 생성하기 : math.random()
// Math.random()                       0.0  <=  ~  <  1.0
// Math.random() * 10                  0.0  <=  ~  <  10.0
// Math.floor() 소수점 이하 버림
// Math.floor(9.2414)  ---> 9
// Math.floor(Math.random() * 10);       0  <=  ~  <  10
// Math.floor(Math.random() * 10) + 1;   1  <=  ~  <  11

// 랜덤 범위 정수값 공식
// x이상 y이하의 랜덤 정수 생성
// Math.floor(Math.random()) * (y - x + 1) + x
// 117 ~ 142
// Math.floor(Math.random()) * (142 - 117 + 1) + 117

var randomNum = Math.floor(Math.random() * 101);
console.log(`랜덤값: ${randomNum}`);

var score = Math.floor(Math.random() * 101);
console.log(`점수: ${score}점`);

if (score >= 60) {
  console.log('합격입니다');
  console.log('수고링ㅋ');
} 
else {
  console.log('꺼지세요');
}