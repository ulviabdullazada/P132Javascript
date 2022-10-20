// let items = document.querySelectorAll('.item')
// let area = document.querySelector('.area')
// //1
// item.ondragstart = () =>{
//     console.log('Start');
// }
// //2
// item.ondrag = ()=>{
//     console.log('continue');
// }
// //3
// item.ondragend = ()=>{
//     console.log('end');
// }
// //4
// area.ondragenter = ()=>{
//     console.log('enter');
// }
// //5
// area.ondragleave = ()=>{
//     console.log('leave');
// }
// //6
// area.ondragover = e=>{
//     e.preventDefault();
//     console.log('over');
// }
// //7
// area.ondrop = ()=>{
//     console.log('drop');
// }


// closure function

// let dragItem;
// for (const item of items) {
//     item.ondragstart = e=>{
//         // e.dataTransfer.setData('id', item.id);
//         dragItem = item;
//     }
// }
// area.ondragover = e =>{
//     e.preventDefault();
// }
// area.ondrop = e =>{
//     // let id = e.dataTransfer.getData('id');
//     // let item = document.getElementById(id);

//     area.appendChild(dragItem);
// }

// let img = document.getElementById('item');
// let areas = document.querySelectorAll('.area');

// img.addEventListener('dragstart',e=>{
//     e.dataTransfer.setData('imgId',img.id);
// })
// for (const area of areas) {
//     area.addEventListener('dragover',e=>{
//         e.preventDefault();
//     })
//     area.addEventListener('drop',e=>{
//         let item = document.getElementById(e.dataTransfer.getData('imgId'));
//         // console.log(area.appendChild(item));
//         area.appendChild(item)
//     })
// }
let dragItem;
let items = document.querySelectorAll('.item');
let areas = document.querySelectorAll('.area');
for (const item of items) {
    item.addEventListener('dragstart', ()=>{
        dragItem = item;
    })
}
for (const area of areas) {
    area.addEventListener('dragover',e=>{
        e.preventDefault();
    })
    area.addEventListener('drop',()=>{
        console.log(dragItem.style.backgroundColor,area.style.borderColor);
        // area.appendChild(dragItem)
    })
}