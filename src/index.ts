// Typrscript Datatypes
let a = 25;
let name1 = "Aksh";

//let make variable a string, number,boolean
let name2: string = "aksh";
let num: number = 123;
let check: boolean;
check = true;

// here the type is any means we don't know the type it will acept all type
let name3;
// try to avoid any
let name4: any;

// Second type to declare variable
let newName = <string>"aksh";
let newNumber = <number>123;

// union variable basically of two type maybe its string or number or any other tyes
let surname: string | number;
surname = "elizabet"; // here its union so we can assign string
surname = 25; // as well as number

// lets create Function in typescript
// if you want to return like particular datatypes then after () add
// note: we cannot use any so if we dont know which datatype is coming so we can use generic {best part of typescript}
const funct = (n: number, m: number): number => {
  console.log(n, m);
  return n * m;
};
funct(10, 5);

// Array in typescript
// note: we can see Type and interface alot in Typescript
// here we can define type using type keyword also called as type alias
type userName = string | number;
let a1: userName = "aksh";

const func = (n: number, m: number): number => {
  return n * m;
};

// OR using type alias
type funcType = (n: string, m: number) => string;
const functType: funcType = (n, m) => {
  console.log(n, m);
  return n + m;
};
// console.log(functType("aksh", 5));

// Array
// this is union array
const arr: (number | string)[] = [12, 24, 36, 48.5, "aksh"];
// here we can only assign number and string else give error
const arrUnion: Array<string | number> = [25, 35, 25.2, 12.1, "aksh"];
const arrNum: number[] = [15, 25, 23.2];
const arrNum1: Array<number> = new Array(50).fill("x");
console.log("array with 50 elements", arrNum1);
const ar1: string[] = ["aksh"];
// or use this becuase this is same as generic
// use this only
const arrString: Array<string> = [];
// create a boolean array with length 20
const arrBolean: Array<boolean> = new Array(20);
//  assign true of 0th index of array
arrBolean[0] = true;
// canot assign string in boolean array
// arrBolean[1] = "true";

// New 4 Array method added

const arrNumber: Array<Number> = [25, 35, 25, 25, 25];

// by defineing type our intellisense can give its proper method
arrNumber.push(50);
arrNumber.forEach((i) => {
  console.log(i);
});
console.log(arrNumber);

// string method
const arr2String: Array<string> = ["akshay", "pratik", "aksh", "prat"];
const arrFilter: Array<string> = [];
arr2String.filter((i) => {
  if (i === "aksh" || i === "prat") {
  } else {
    arrFilter.push(i);
  }
  console.log(arrFilter);
});
