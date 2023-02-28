// 1)print the odd numbers in array
let oddNumber=((arr)=>{
    let result=[];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            result.push(arr[i]);
        }
    }
    return result;
})
let arr=[1,2,3,4,5,6];
console.log(oddNumber(arr));
// ----------------------------------------------------------------------------
// 2)Convert all the strings to title caps in a string array
let titleCaps=((str)=>{
     str=str.toLowerCase().split(' ');
     for(let i=0;i<str.length;i++){
         str[i]=str[i][0].toUpperCase()+str[i].slice(1);
     }
    
  return str.join(' ');
})
let str="GEek FoR gEEks";
console.log(titleCaps(str));
// ----------------------------------------------------------------------------
//  3)sum of all number in the array
 let sum=((num)=>{
     
     let res=0;
     
     for(let i=0;i<num.length;i++){
         res+=num[i];
     }
     return res;
})
let num=[1,2,3,4,5];
console.log(sum(num));
// -----------------------------------------------------------------------------
// 4)return all prime numbers in the array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (function () {
  return arr.filter(function(num) {
    for(let i = 2; i < num; i++) {
      if(num % i == 0) {
        return false;
      }
    }
    return num !== 1;
  });
})();

console.log(primeNumbers);
// -----------------------------------------------------------------------------
// 5)return all palindromes in array
let palindrome =((str)=>{
    let result=[];
    for(let i=0;i<str.length;i++){
        let reverse=str[i].split('').reverse().join('');
        if(reverse==str[i]){
            result.push(str[i])
        }
    }
    return result;
})
let str=["abc", "car", "ada", "racecar", "cool"];
console.log(palindrome(str));


