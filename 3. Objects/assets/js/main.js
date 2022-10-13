// 1. Object literal
// let person = {
//     name:'Tahir',
//     surname:'Tahirli',
//     age:20
// }
// 2. Object.create()
// let person1 = Object.create({
//     name:'Ali',
//     surname:'Huseynov',
//     age:18
// })
// console.log(person1);
// let person2 = Object({
//     name:'Zeynal',
//     surname:'Alishov',
//     age:20
// })
// console.log(person2);
// 3. constructor function
// function Student(name,surname, age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.getAge = function(){
//         console.log(this.age);
//     }
// }

// let person3 = new Student('Samandar','Rzayev',27);
// let person5 = new Student('Sanan','Ibrahimvo',27);
// person3.age = 16;
// person3.average = 20;
// console.log(person3,person5);
// person3.getAge()
// console.log(person3)
// 4. Class
// class Person{
//     constructor(name, surname,age){
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//     }
// }
// console.log(new Person('Yusif','Huseynzade',26));

// let car = {
//     name:'Fiat',
//     model: '500',
//     weight: '850kq',
//     carInfo: () => `Name = ${this.name}, Model = ${this.model}`
// }
// car.color = "yellow"
// car["door count"] = 3
// console.log(car.carInfo());
// let anonym = function(){
//     console.log(this);
// }
// let anonymArrow = ()=>{
//     console.log(this);
// }
// anonym();
// anonymArrow();

// let newObj={
//     prop1 : 'value',
//     prop2 : 'value',
//     anonym : function(){
//         console.log(this);
//     },
//     anonymArrow : ()=>{
//         console.log(this);
//     }
// }
// newObj.anonym();
// newObj.anonymArrow();
// let person = {
//     name: "Coshqun",
//     surname: "Sadikhov",
//     age: 20,
//     get getInfo(){
//         return `${this.name} ${this.surname} ${this.age}`
//     },
//     set setName(value){
//         this.name = value
//     }
// }
// for (const key in person) {
//     person.setName = "Ali"
//     console.log(person[key],key);
// }
// for (const iterator of person) {
//     console.log(iterator);
// }; --- olmur
// console.log(person);
// console.log(new Array());
// console.log(new Number(12));

function Actor(name, surname, age,image){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.image = image;
}
Actor.prototype.toString = function(){
    return this.name + " " +this.surname
}
let BradPitt = new Actor("Brad","Pitt",47,"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3MDUxMjkzMjI1OTIwMTcz/brad-pitt-attends-the-premiere-of-20th-century-foxs--square.jpg");
let RobertJr = new Actor("Robert","Downey JR",52,"https://daman.co.id/daman.co.id/wp-content/uploads/2019/10/Robert-Downey-Jr-Glasses-1.jpg");

// BradPitt.getInfo = function(){
//     return this.name + " " +this.surname
// }

// console.log(BradPitt);
// console.log(RobertJr.getInfo());
// document.write(BradPitt)

console.log(BradPitt);
console.log(RobertJr);


// let obj1 = {
//     name:"name",
//     age:0,
//     vali: {
//         surname:'adfasdf',
//         prop1:2,
//         obj2: {}
//     }
// }
// console.log(obj1.nested.prop1);
let actors = [BradPitt,RobertJr];
let box = document.getElementById("box");
getActors();
function getActors(){
    box.innerHTML = "";
    for (const actor of actors) {
        box.innerHTML +=
        `<div class="col-md-4 card">
            <img class="w-100" src="${actor.image}">
            <div>
                <h1>${actor.name} ${actor.surname}</h1>
                <small>${actor.age}</small>
            </div>
        </div>`
    }
}

function CreateActor(){
    actors.push(new Actor(inputName.value,inputName.value,20,ImageUrl.value))
    getActors()
}