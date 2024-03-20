
var result;  //변수 선언

result = 10 + 20;  //값을 변수에 할당(대입)

var multiple = result * 3; //90
console.log(multiple);

var fruit;

fruit = '자몽';  //변수의 초기화
console.log(fruit);

var food = '볶음밥' // 변수의 선언과 초기화를 동시에

food = '돈까쓰';  //변수의 재할당 var 적지않기  
console.log(food);

// 변수 이름 규칙
//var 7number; // (x) 숫자가 맨 앞에 오면 안됨
var num7bar; // (o)

//var user name; // (x) 띄어쓰기 안됨
var current_login_user_phone_number; // snake case
var currentLoginUserPhoneNumber; // camel case (js : o)

var apple; 
var APPLE;
var Apple; // 모두 다른 변수임

// var myPetName!; // (x)
var $myPetName_; // _ 과 $ 는 예외

// var for;  // (x) 키워드는 식별자 이름으로 사용 불가능
// var let;
var For;  // (o)
var Let;  // (o)


const $orange = '#ffa808'; 

$orange = '241rqf'  // 상수는 재할당 불가능
console.log($orange);