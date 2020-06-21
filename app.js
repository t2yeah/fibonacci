'use strict';
const memo = new Map();

memo.set(0,0);  
memo.set(1,1);  

function fib(n){
    if(memo.has(n)){
        // console.log(n, "exist");
        return memo.get(n);
    }else{
        // console.log(n, "not exist");
        memo.set(n,  memo.get(n-1) + memo.get(n-2));   
    }
    return memo.get(n) 
}

for (let i = 0; i < 200 ; i++) {
    console.log(fib(i));
}


// function fib(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// const length = 40;
// for (let i = 0; i <= length; i++) {
//   console.log(fib(i));
// }

