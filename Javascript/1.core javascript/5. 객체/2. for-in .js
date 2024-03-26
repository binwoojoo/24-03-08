
var phone = {
  company: "삼성",
  color: "펄 화이트",
  model: "갤럭시 S24 Ultra",
  price: 1200000,
};

// 값이 아닌 키가 반복됨
for (var data in phone) {
    // console.log(data);
    // console.log(typeof(data));
    console.log(phone[data]);
}

console.log('=======================');

// 객체 프로퍼티 유무 확인
console.log('memory' in phone);

var newkey = 'memory'
if(!(newkey in phone)) {
    phone[newkey] = '32GB';
}
console.log(phone);