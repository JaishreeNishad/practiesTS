"use strict";
// const obj:{
//     height:number;
//     weight:number;
//     gender:boolean;
// }={
//     height:3252,
//     weight:65,
//     gender:true,
// }
// --------------------------------------
// type FuncType = (n:number,m:number,l?:number)=>number;
// optional parameter
// const func:FuncType=(n,m,l)=>{
//     if(typeof l==="undefined")return n*m;
//     return n*m*l;
// }
// func(25,35);
// type FuncType = (n:number,m:number,l?:number)=>number;
// //default parameter
// const func:FuncType=(n,m,l=20)=>{
//     if(typeof l==="undefined")return n*m;
//     return n*m*l;
// }
// func(25,35);
//rest operator
// type FuncType = (...n:number[])=>number[];
// const func:FuncType =(...n)=>{
//     return n;   
// }
// func(25,35,21,654,654);
// Function with object
// interface Product {
//     name: string;
//     stock: number;
//      price: number;
//       photo: string;
// }
// type GetDataType = (product: Product
//     ) => void;
// const getData: GetDataType = (product)=> {
//     console.log(product)
// }
// const productOne ={
//     name:   "macbook",
//     stock: 45,
//      price: 99999,
//       photo: "samplephotourl",
// }
// getData(productOne)
//Never type
// const errorHandler =()=>{
//     throw new Error();
// }
// const errorHandler =():never=>{
//     throw new Error();
// }
///------------------------------------
//classes
// 
// interface ProductType{
//     name:string,
//     stock:number,
//     price:number,
//     id:string,
//     offer?:boolean,
// }
// class Product implements ProductType{
//    public id:string = String(Math.random()*1000);
//    constructor(name:string,price:number,stock:number){
//     this.name = name;
//     this.
//    }
// }
//Type Assertion
// const btn = document.getElementById("btn")!;
// const btn = document.getElementById("btn") as HTMLElement
// const btn = <HTMLElement>document.getElementById("btn");
// 
// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form >input") as HTMLInputElement;
// form.onsubmit=(e:SubmitEvent) => {
//     e.preventDefault();
//     console.log(myinput.value);
//     const h2 = document.createElement("h2");
//     const body = document.querySelector("body")!;
//     const value = Number(myinput.value);
//     h2.textContent = String(value + 20);
//     body.append(h2);
// };
// interface Person{
//     name:string;
//     email:string;
// }
// const myobj: Person = {
//     name:"abhi",
//     email:"abhi@gmail.com",
// };
// console.log(myobj.name);
//--------------------------------------------------------------
//Type Utility
//Partial<Type
//Required type
//Readonly type
//Record<key,type>
//Pick<key, type>
//Omit<key, type>
//Exclude<type, ExcludeUnion>
//Extract<type,Union>
//NonNullable<type></type>
//Parameter<Type>
//ConstractorParameter<Type>
//ReturnType<Type>
//InstantType<Type>
//Partial<Type
// type User ={
//     name:string;
//     email:string;
// }
// type User2 = Partial<User>
//Required type ----opposite of partial
// type User ={
//         name?:string;
//         email:string;
//  }
//  type User2 = Required<User>
//Readonly type--- only read not change
// type User ={
//         name:string;
//         email:string;
//     }
//     const user:Readonly<User>={
//         name:"abhi",
//       email:"abhi@gmail.com",
//     }
// Record<key,type>
// type User ={
//             name:string;
//             email:string;
//         }
// interface UserInfo {
//     age:number;
// }
// type UserName = "John"| "Levi"|"elon"|"jack"
// const users :Record<UserName,UserInfo> = {
//     John : {age:25},
//     Levi : {age:20},
//     elon : {age:23},
//     jack : {age:22},
// }
//Pick<key, type>
//# sourceMappingURL=index.js.map