// let h1 = document.getElementById("text");
// let allH1 = document.getElementsByTagName('h1');
// let allH1ByName = document.getElementsByName('yazi');
// let h1class = document.getElementsByClassName("c-h1");
// let h1qs = document.querySelectorAll('.c-h1'); 
// // console.log(h1qs);
// // text.innerText = "P132"

// h1.innerText = "P132";

// // h1qs.style.color = "red";
// // console.log(h1qs);
// for (const item of h1qs) {
//     item.style.color = "red!important";
// }

// const btn = document.getElementById("click");
// var index = 0;
// btn.addEventListener("click",function(){
//     // const div = document.querySelector(".all");
//     // index++;
//     // div.innerHTML += `<div class="item"><img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/${index}.jpg"></div>`
//     // let img = document.querySelector("img");
//     // let imgSrc = img.src;
//     // document.querySelector("a").href = imgSrc;
//     let div = document.querySelector(".all");
//     div.innerText = div.getAttribute("p132")
// })
// let btns = document.querySelectorAll("button");

// for (const btn of btns) {
//     if (btn.hasAttribute('disabled')) {
//         // btn.style.display ="none";
//         btn.remove();
//     }
// }

// let checkboxes = document.querySelectorAll('input[type=checkbox]')
// let nl = document.querySelectorAll('input[type=checkbox]:checked');
// console.log(nl);
// for (const box of checkboxes) {
//     if (box.hasAttribute("checked")) {
//         let label = document.querySelector(`label[for=${box.id}]`)
//         label.style.color = "blue"
//     }  
// }
let buttons = document.querySelectorAll("button");

for (const btn of buttons) {
    btn.addEventListener("click",function(){
        let input = document.getElementById("pass");
        let icon = document.getElementById("icon");
        if (input.type === "password") {
            input.type="text";
            icon.classList.remove("bi-eye")
            icon.classList.add("bi-eye-slash")
        }
        else{
            input.type="password";
            icon.classList.remove("bi-eye-slash")
            icon.classList.add("bi-eye")
        }
    })
}