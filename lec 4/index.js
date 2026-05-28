// let btn=document.querySelector("button");
//       let body=document.querySelector("body");
//      btn.addEventListener("click",function(){
//         body.style.backgroundColor="red";
//      })


var globalVar="I am Global Variable";
function globalScopeExample()
{
   console.log("Global Variable Access:", globalVar);
}
globalScopeExample();
console.log("---------------------------");


function functioScopeExample()
{
   var message="Inside Function";
   console.log(message);
}
functioScopeExample();
console.log("-------------------");


{
   let blockVar="Block Scope Variable";
   const blockConst="Block Scope const";
   console.log(blockVar);
   console.log(blockConst);
}
//console.log(blockVar);
console.log("-----------------");

function varVSLet()
{
   if(true)
   {
      var a=10;
      let b=20;
   }
   console.log("var value:", a);
   //console.log(b);
}
varVSLet();
console.log("--------------------");



console.log("Global this:", this);
console.log("------------------------");



function normalFunction()
{
   console.log("Normal Function this:", this);
}
normalFunction();
console.log("-------------------------");



const student={
   name: "Prachi",
   age: 20,

   intro: function()
   {
      console.log("Student Name:", this.name);
      console.log("Student Age:", this.age);
   }
};
student.intro();
console.log("----------------------------");




const obj={
   name:"Javascript",
   arrowFunction:()=>{
      console.log("Arrow Function this:", this);
   }
};
obj.arrowFunction();
console.log("----------------------------------");



const user={
   name:"Prachi",
   details:{
      city:"Jabalpur",
      showDetails:function()
      {
         console.log(this.city);
      }
   }
};
user.details.showDetails();
console.log("--------------------------------");




function Person(name, age)
{
   this.name=name;
   this.age=age;
}
const p1=new Person("Prachi", 22);
console.log(p1);
console.log("---------------------------------");


console.log(x);
var x=100;
console.log("--------------------------------------");



let y=50;
console.log(y);
console.log("-------------------------------------");



function outer()
{
   let outerVariable="I am Outer Variable";
   function inner()
   {
      console.log(outerVariable);
   }
   inner();
}
outer();
console.log("-------------------------------------");



let country="India";
function stateFunction()
{
   let state="Madhya Pradesh";
   function cityFunction()
   {
      let city="Jabalpur";
      console.log(country);
      console.log(state);
      console.log(city);
   }
   cityFunction();
}
stateFunction();
console.log("----------------------------------------");



"use strict";
function strictModelExample()
{
   console.log(this);
}
strictModelExample();
console.log("------------------------------------------");



const car={
   brand:"BMW",
   showBrand:function()
   {
      console.log(this.brand);
   }
};
car.showBrand();
console.log("-----------------------------------------");




const employee={
   name:"Prachi",
   getName: function()
   {
      console.log(this.name);
   }
};
const anotherFunction=employee.getName;
anotherFunction();
console.log("------------------------------------------");