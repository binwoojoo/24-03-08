const employe = {
  empName: "뽀로로",
  age: 10,
  hireDate: "2020-01-30",
  birthDate: "2015-12-31",
};

// const name = employe.empName;
// const hire = employe.hireDate;

const { empName, hireDate } = employe;
console.log(`name:${empName}, hire:${hireDate}`);

function foo({ empName, age }) {
  //   const { empName, age } = employe;
  console.log(`내 이름은 ${empName}입니다`);
  console.log(`나이는 ${age}입니다`);
}

const age = 20;

const { age: empAge, birthDate } = employe;
console.log(empAge);

const divStyle = {
  "font-size": "18px",
  "background-Color": "red",
};

const { "font-size": fontsize, "background-Color": bgColor } = divStyle;
console.log(fontsize);
console.log(bgColor);

console.log("================================");
const dog = {
  kind: "말티즈",
  name: "해피",
  age: 2,
  injection: false,
};
const { kind, age: petAge, ...rest } = dog;
console.log(kind);
console.log(petAge);
console.log(rest);

// 객체 안전 복사
const copyDog = { ...dog };
copyDog.age = 10;

const copyDog2 = { ...dog, age: 20, favorite: ["산책"] };

console.log(dog);
console.log(copyDog);
console.log(copyDog2);
