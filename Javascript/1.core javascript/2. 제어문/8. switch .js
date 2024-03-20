
var season = prompt('선호하는 계절을 입력하세요.')

// 조건을 판별할 변수 (비교식 x, 문자값이나 숫자값)

switch (season) {
  case '봄': case 'spring':
    alert('봄에는 여의도로 가세요');
    break;
  case '여름': case 'summer':
    alert('여름에는 집으로 가세요');
    break; 
  case '가을': case 'fall':
    alert('가을에는 한강으로 가세요');
    break;
  case '겨울': case 'winter':
    alert('겨울에는 집으로 가세요');
    break;
    default :
    alert('봄, 여름, 가을, 겨울 중 하나를 입력하세요')
}

