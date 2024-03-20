
var num = 27;
console.log(typeof num);

console.log(num / 5);

var foodName = `꿔보우러우`; 
console.log(foodName);

var element = `<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>`;
console.log(element);

var elem = `
<nav>
  <ul>
    <li>메롱</li>
  </ul>
</nav>
`;           // ` 을 사용하면 줄바꿈 가능 
console.log(elem);

console.log('==============');

var month = 6;
var day = 6;
var anni = '현충일'

var sentence = month + '월 ' + day + '일은 ' + anni + '입니다.'
console.log(sentence);

var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`;
console.log(sentence2);

var userAge = 30;

var flag = userAge > 19;
console.log(typeof flag);
console.log(flag);

var TRUE = true;

// undefined: 아직 값이 없는 상태(고의로 안넣은게 아님) 
// null: 일부러 값을 없앤 상태(고의로 값을 없앰)
var petName;
console.log(petName);

var myHobby = `산책`;
myHobby = null;

console.log(myHobby);

function buyNewCar(money) {
  if (money >= 2000 && money < 3000){
    return '레이';
  }
  else if (money >= 3000){
    return `아반떼`;
  }
  else if (money <= 0){
    return null;
  }
}
console.log(buyNewCar(3000));

