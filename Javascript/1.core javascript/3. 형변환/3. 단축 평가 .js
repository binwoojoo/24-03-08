

true && true // t
true && false // f
false && true // f
false && false // f


true || true // t
true || false // t
false || true // t
false || false // f


// OR연산 : 첫번째 truthy를 반환
console.log('hello' || 'bye');
console.log(null || '안뇽');

// AND연산 : 첫번째 falsy를 반환
console.log('메롱' && NaN && '즐');
console.log(0 && '루룰루룰'); // 0이 첫번째 falsy이기 때문에 0을 그냥 출력

// 같은 코드임
if ('조건') {
    console.log();('크크크ㅡ크크크크ㅡㅋ')
}

'조건' && console.log('ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ');

/*
  <h1>안녕하세요</h1>
  login && <h2>안녕하세요</h2>

  쿠폰당첨여부 && sendCoupon();
  내 게시물 여부 && <button>삭제</button>

  !쿠폰당첨여부 && sendMessage();  
*/