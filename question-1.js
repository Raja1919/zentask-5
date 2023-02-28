// 1)print the odd numbers in array

// anonymous function:
    let oddNumber=function(Arr){
    
    for(let i=0;i<Arr.length;i++){
        if(Arr[i]%2==1){
            console.log(Arr[i]);
        }
    }
}
 let Arr=[1,2,3,4,5,6];
oddNumber(Arr);

// IIFE function:
(function(Arr){
    
    for(let i=0;i<Arr.length;i++){
        if(Arr[i]%2==1){
            console.log(Arr[i]);
        }
    }
})([1,2,3,4,5,6]);
// --------------------------------------------------------------------------------------
// 2)Convert all the strings to title caps in a string array
// anonymous function:
let titleCaps=function(Str){
     Str=Str.toLowerCase().split(' ');
     for(let i=0;i<Str.length;i++){
         Str[i]=Str[i][0].toUpperCase()+Str[i].slice(1);
     }
     return Str.join(' ');
 }
let Str="GEek FoR gEEks";
console.log(titleCaps(Str));

// IIFE function:
(function(){
   let Str="GEek FoR gEEks";
     Str=Str.toLowerCase().split(' ');
     for(let i=0;i<Str.length;i++){
         Str[i]=str[i][0].toUpperCase()+Str[i].slice(1);
         
     }
     console.log(Str.join(' '));
 })();
//  --------------------------------------------------------------------------------------
//  3)sum of all number in the array
//  anonymous function:
 let sum=function(Arr){
    let add=0;
    for(let i=0;i<Arr.length;i++){
        add+=Arr[i];
        
    }
    return add;
}
  let Arr=[1,2,3,4,5];
console.log(sum(Arr));

// IIFE function
(function(){
let arr=[1,2,3,4,5];
    let add=0;
    for(let i=0;i<arr.length;i++){
        add+=arr[i];
    }
    console.log(add);
})();
// ---------------------------------------------------------------------------------------------
// 4)return all prime numbers in the array
// anonymous function:
let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumber=arr.filter(function(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return num!==1;
})
console.log(primeNumber);

// IIFE function:
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


// -----------------------------------------------------------------
// 5)return all palindromes in array
// anonymous function:
let palindrome=function(str){
     let res=[];
     for(let i=0;i<str.length;i++){
         let reverse=str[i].split('').reverse().join('')
         if(reverse==str[i]){
             res.push(str[i]);
         }
     }
     return res;
 }
let str=["abc", "car", "ada", "racecar", "cool"];
console.log(palindrome(str));

// IIFE function:
(function(str){
     let res=[]
     for(let i=0;i<str.length;i++){
         let reverse=str[i].split('').reverse().join('')
         if(reverse==str[i]){
             res.push(str[i]);
         }
     }
     console.log(res);
 })(["abc", "car", "ada", "racecar", "cool"]);
//  ------------------------------------------------------
//  6)return median of two sorted arrays of the same size
// anonymous function:
const median = function(nums1, nums2) {
  let merged = [];
  let i = 0;
  let j = 0;

  
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }


  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  
    let n = merged.length; 
  let mid = Math.floor(n / 2);

  if(n.length%2!==0){
      
       return ((merged[mid-1]+merged[mid])/2)
  }else{
      
     return (merged[mid]);
  }
}

let nums1 = [1, 12, 15, 26, 38];
let nums2 = [2, 13, 17, 30, 45];
console.log(median(nums1, nums2));

// IIFE function:
(function(nums1,nums2) {
  let merged = [];
  let i = 0;
  let j = 0;

 
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }


  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

 
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  
  let n = merged.length; 
  let mid = Math.floor(combined / 2);

  if(n.length%2!==0){
      
       console.log((merged[mid-1]+merged[mid])/2);
  }else{
      
     console.log(merged[mid]);
  }
})([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]);

// --------------------------------------------------------------
// 7)remove duplicates from an array
// anonymous function:
let removeDuplicate=function(){
    let res=[];
    for(let i=0;i<num.length;i++){
        if(!res.includes(num[i])){
            res.push(num[i]);
        }
    }
    return res;
}
let num=["apple","apple","orange","mango","orange"];
console.log(removeDuplicate(num));

// IIFE function
(function(num){
    let res=[];
    for(let i=0;i<num.length;i++){
        if(!res.includes(num[i])){
            res.push(num[i]);
        }
    }
    console.log(res);
})(["apple","apple","orange","mango","orange"]);

// --------------------------------------
// 8)rotate an array k times

// anonymousfunction:
let rotateArray=function(arr,k){
    let n=arr.length;
    let rotation=k%n;
    let result=[];
    
    result.push(...arr.slice(n-rotation));
    result.push(...arr.slice(0,n-rotation));
    
    return result;
}
let arr=[1,2,3,4,5];
let k=3;
console.log(rotateArray(arr,k));

// IIFE function:

(function(){
let rotateArray=function(arr,k){
    let n=arr.length;
    let rotation=k%n;
    let result=[];
    
    result.push(...arr.slice(n-rotation));
    result.push(...arr.slice(0,n-rotation));
    
    return result;
}
let arr=[1,2,3,4,5];
let k=3;
console.log(rotateArray(arr,k));
})();