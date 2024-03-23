
var num1 = +prompt('정수 A')
var num2 = +prompt('정수 B')
var num3 = +prompt('정수 C')

// if (num1 === num2 && num2 === num3) {
//   alert('세 값이 모두 같습니다.')  
// } else if (num1 === num2 && num1 !== num3) {
//   alert('두 값이 같습니다.')
// } else if (num2 === num3 && num2 !== num1) {
//   alert('두 값이 같습니다.')
// } else if (num1 === num3 && num1 !== num2) {
//   alert('두 값이 같습니다.')
// } else {
//   alert('세 값이 모두 다릅니다.')
// }

if (num1 === num2 && num2 === num3) {
  alert('세 값이 모두 같습니다.')  
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
  alert('두 값이 같습니다.')
} else {
  alert('세 값이 모두 다릅니다.')
}
