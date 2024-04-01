// var x = 10;

// function foo() {
//   console.log(x);
//   var x = 20;
// }

// foo();

// var numbers = [5, 2, 8, 1, 6];

// numbers.sort( function(a,b) {
//  return a-b;
// });

// console.log(numbers);


let check = 'true';
const same = '1o2o3o2o1';
for(let i = 0; i < same.length; i++) {
    if(same[i] !== same[(same.length-1)-i]) {
        check = false;
        break;
    }
}
console.log(check);

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

const check = isPalindrome('1o2o3o2o1');
console.log(check); // true