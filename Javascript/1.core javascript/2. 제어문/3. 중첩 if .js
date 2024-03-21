
var height = +prompt('당신의 키는 몇 cm 입니까?');

if (height >= 140) {
  var age = +prompt('당신의 나이는 몇 살입니까?');
  if (age >= 8) {
    alert('놀이기구에 탑승할 수 있습니다');
  } else {
    alert('나이 제한이요')
  }
} else {
  alert('키가 작아서 놀이기구에 탑승할 수 없습니다');
}

alert('오늘 하루 즐거운 시간되세요!');