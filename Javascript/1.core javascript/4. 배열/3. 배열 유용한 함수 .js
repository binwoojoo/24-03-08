var foodlist = ['닭꼬치', '볶음밥', '짜장면', '짬뽕', '짜장면']

// indexOf(): 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌.

var target = '짜장면';
var index = foodlist.indexOf(target);

console.log(`index: ${index}`);

// 같은 기능을 하는 코드
for(i = 0; i < foodlist.length; i++) {
    if(target === foodlist[i]) {
        index = i;
        break;
    }
}
console.log(`index2: ${index}`);

// include(): 특정 데이터가 있는지 없는지 논리로 확인
var flag = foodlist.includes('짬뽕');
console.log(flag);

// slice(): 배열을 원하는 범위만큼 분할
var sliced = foodlist.slice(1, 3);
console.log(sliced);
var sliced2 = foodlist.slice(3);
console.log(sliced2);

// 전체 복사
var sliced3 = foodlist.slice();
console.log(sliced3);

// slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음!!!! 
console.log(foodlist);

// reverse(): 배열을 역정렬
// 원본이 변경됨!!!
console.log('============================');

var nums = [10,20,30,40,50]
var numsCopy = nums.slice(); // copy 생성

numsCopy.reverse();

console.log(nums);
console.log(numsCopy);

console.log('===========================');

// concat(): 배열을 결합한 사본을 갖다줌
var arr1 = [10,20,30];
var arr2 = [99,999];

var concated = arr1.concat(arr2);
console.log(concated);

console.log('===========================');

// splice(): 배열의 삭제 및 삽입, 원본에서 삭제 및 삽입을 진행함으로 원본이 손상됨

console.log(foodlist);

foodlist.splice(2, 1);  // 시작 인덱스(2)부터, 1개 지우세요

console.log(foodlist);

foodlist.splice(0, 1, '파스타', '보쌈');  // 새로운 요소 추가

console.log(foodlist);

foodlist.splice(2, 0, '마라탕'); // 해당 위치에 지우지않고 요소만 추가하기 

console.log(foodlist);

foodlist.splice(2); // 2번부터 끝까지 모두 지우기

console.log(foodlist);
