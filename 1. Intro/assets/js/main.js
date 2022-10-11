// alert("Sakhavat");

// Data types - primitive, non-primitive
// var name = "Seymur"; // string
// var age = 23; // number
// var number = 12371253172351273512735123n; //bigint
// console.log(typeof name)
// console.log(typeof age);
// console.log(typeof number);
// var isMarried = false; //boolean
// console.log(typeof isMarried);
// var car = null; //null
// console.log(typeof car);
// var abc; //undefined
// console.log(typeof abc);
// name = true;
// console.log(name)
// name = 55;
// console.log(name);

// object

// var Stunden = {
//     name:"Seymur",
//     surname:'Fahradov',
//     groupName: `P132`,
//     getFullInfo : function(){
//         return this.name + ' ' + this.surname + ' ' + this.groupName
//     }
// }
// console.log(typeof alert);
// console.log(typeof Stunden);

// function changeColor(){
//     document.body.style.backgroundColor = "#"+Math.floor(Math.random()*100)+Math.ceil(Math.random()*100)+Math.ceil(Math.random()*100);
// }
// function changeAnotherColor(){
//     document.body.style.backgroundColor = "blue";
// }

// var, let, const

//var - hoisting

// text = "Salam";
// console.log(text);
// var text;
// var a1 = "Some text";
// a = "Salam P132";
// console.log(a);

//let

// text1 = "variable - let";
// console.log(text1);
// let text1;

// let l = "Some text with let"
// l = 'P132 let';
// // let l = 99;
// console.log(l);


//const

// const c = 'Some text with const'
//c = 'lorem'


// console.log(c);



// var text = "Salam P132";

// if(text.length > 0){
//     var text = "Aleykum Salam"
// }
// console.log(text);

// let yazi = "Salam P132";
// for (let i = 0; i < 10; i++) {
//     let yazi = i;
//     if(true){
//         let yazi = "Aleykum Salam"
//         console.log(yazi)
//     }
//     console.log(yazi);
// }

// console.log(yazi);
// let a = ["asd",123,true]
// var b = ["asdqweqwe",123,true]

// console.log(a,b)
// confirm("Yashiniz");
// if(age < 18){
//     console.error("olmaz");
// }
// else{
//     console.log("welcome");
// }
//  

let balans = 500;
alert(`Balans : ${balans} manat`);
let isIncrease = confirm("Balansı artırmaq istəyirsiznizmi?")
if (isIncrease) {
    let input = prompt("Məbləği daxil edin");
    if (!isNaN(input)) {
        balans = balans + Number(input);
        alert(`Balans : ${balans} manat`);
    }
    else{
        alert("Yeri get");
    }
}
else{
    alert(`Balans : ${balans} manat`);
}
let username = [];
