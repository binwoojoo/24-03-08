// const increase = (() => {
//     let count= 0;
//     return () => ++count;
// })();

// const decrease = (() => {
//     let count= 0;
//     return () => --count;
// })();

// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(increase());
// console.log(decrease());
// console.log(decrease());

// const countCloser = () => {
//   let count = 0;

//   const increase = () => ++count;
//   const decrease = () => --count;

//   return { increase: increase, decrease: decrease };
// };

// const { increase, decrease } = countCloser();

const { increase, decrease } = (() => {
    let count = 0;
    return {
      increase: () => ++count,
      decrease: () => --count,
    }
  })();
  // console.log(typeof counter);
  

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
