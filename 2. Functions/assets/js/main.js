// function p132(){
//     console.log("Hello world")
// }
// function p132(){
//     return "Hello world";
// }
// console.log(p132());
// var variable = "fhskdfh";
// function p132(name)
// {
//     console.log(`Hello ${name}`);
// };
// function p132(){
//     console.log(`Salam P132`);
// }
// function abc(){
//     console.log("skjdfhkjfghdjkgh");
// }

// let ad = 'Tahir'
// p132(ad);

// const funk = function (){
//     console.log("Salam");
// }

// const funk = a => console.log(a)
// const multiple = (x,y) =>{
//     //codes
//     console.log(x*y)
// };

// const multiple = (x,y) => x*y;

// function multiple(x,y){
//     return x*y;
// }

// funk("P132"); 
// console.log(multiple(4,5));

// const btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     alert();
// })
// var text = "Salam";
// var text = new String("Salam");
// var yazi = "Seymur "
// var text = "Seymur bu gun nasazdir. Online qoshulub. Seymur derse yaxshi hazirlashmadi"
// console.log(text);
// console.log(text.substring(0,-1));
// let yaziFull = document.getElementById("yazi").innerText;
// function deleteLastSymbol() {
//     let yazi = document.getElementById("yazi")
//     if(yazi.innerText.length > 0){
//         yazi.innerText = yazi.innerText.slice(0,-1)
//     }
// }
// function addLastSymbol(){
//     let yazi = document.getElementById("yazi");
//     console.log(yaziFull[yazi.innerText.length],yaziFull[yazi.innerText]);
//     yazi.innerText += yaziFull[yazi.innerText.length]
// }
// console.log(text.slice(0,-1));
// console.log(text.replace(/Seymur/gi,"Ali"));
// console.log(text.concat(" ","new string"));

// console.log(text.search("Seymur"))

var stdns = ["Saxavat","Tahir","Zeynal"];
// var tblr = ["Ali","Yusif","Cahangir"]

// push, pop, shift, unshift
// stdns.push("Sabrina")
// // console.log(stdns.pop());
// stdns.unshift("Ravil")
// stdns.unshift("Samandar")

// console.log(stdns.shift());
// stdns[stdns.length] = "Ali"
// var stdns = [];
// stdns.length = 2;
// delete stdns[1];
// var newstd = stdns;
// stdns[1] = "Sanan";
// console.log(stdns);
// console.log(newstd);
// console.log(stdns.join(','));
// console.log(stdns.concat(tblr).sort().reverse());

// let text = "Javascript II ders"

// let arr1 = text.split(" ");
// console.log(arr1);

stdns.forEach((val, indx, arr)=>{
    console.log(`${indx}. ${val}`);
})


for (let key in stdns) {
    console.log(key, stdns[key]);
}
