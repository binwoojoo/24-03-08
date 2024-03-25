
var pets = ['개', '고양이', '물개',];

console.log(pets);
pets[3] = '치타';

console.log(pets);

// push(): 배열 맨 끝에 데이터 추가
pets.push('호랑이');
pets.push('독수리', '닭', '소', '돼지');

console.log(pets);

// pop(): 배열 맨 끝 데이터 삭제
var myPet1 = pets.pop();
pets.pop();
var myPet2 = pets.pop();

console.log(pets);
console.log(myPet1);
console.log(myPet2);

// shift(): 배열의 맨 첫 데이터 삭제
// unshift(): 배열의 맨 첫번째에 추가
pets.shift();
console.log(pets);

pets.unshift('댕댕이');
console.log(pets);