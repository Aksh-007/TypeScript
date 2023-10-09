"use strict";
// Typrscript Datatypes
let a = 25;
let name1 = "Aksh";
//let make variable a string, number,boolean
let name2 = "aksh";
let num = 123;
let check;
check = true;
// here the type is any means we don't know the type it will acept all type
let name3;
// try to avoid any
let name4;
// Second type to declare variable
let newName = "aksh";
let newNumber = 123;
// union variable basically of two type maybe its string or number or any other tyes
let surname;
surname = "elizabet"; // here its union so we can assign string
surname = 25; // as well as number
// lets create Function in typescript
// if you want to return like particular datatypes then after () add
// note: we cannot use any so if we dont know which datatype is coming so we can use generic {best part of typescript}
const funct = (n, m) => {
    console.log(n, m);
    return n * m;
};
funct(10, 5);
let a1 = "aksh";
const func = (n, m) => {
    return n * m;
};
const functType = (n, m) => {
    console.log(n, m);
    return n + m;
};
// console.log(functType("aksh", 5));
// Array
// this is union array
const arr = [12, 24, 36, 48.5, "aksh"];
// here we can only assign number and string else give error
const arrUnion = [25, 35, 25.2, 12.1, "aksh"];
const arrNum = [15, 25, 23.2];
const arrNum1 = new Array(50).fill("x");
console.log("array with 50 elements", arrNum1);
const ar1 = ["aksh"];
// or use this becuase this is same as generic
// use this only
const arrString = [];
// create a boolean array with length 20
const arrBolean = new Array(20);
//  assign true of 0th index of array
arrBolean[0] = true;
// canot assign string in boolean array
// arrBolean[1] = "true";
// New 4 Array method added
const arrNumber = [25, 35, 25, 25, 25];
// by defineing type our intellisense can give its proper method
arrNumber.push(50);
arrNumber.forEach((i) => {
    console.log(i);
});
console.log(arrNumber);
// string method
const arr2String = ["akshay", "pratik", "aksh", "prat"];
const arrFilter = [];
arr2String.filter((i) => {
    if (i === "aksh" || i === "prat") {
    }
    else {
        arrFilter.push(i);
    }
    console.log(arrFilter);
});
// const arrayString: Array<number> = [15, 25, 14, 47, 15];
//  tuples in typescript
//  or also called as fixed size array
const arrayumber = [15, 25, 14];
const arrayTuple = ["aksh", 25, true];
const index = arrayTuple.indexOf("aks");
console.log(index);
const stringArray = ["Akshay", "aksh", "Pratik", "prat"];
