// 두 개의 정수를 입력해 첫번째는 가로변 두번째는 새로변으로
// * 을 출력해야함
var result = ''
// var num1 = 5;
// var num2 = 7;

for(i = 1; i <= 7; i++) {
    for(j = 1; j <= 5; j++) {
    result += "*"
    }
    result += '\n'
}

console.log(result);