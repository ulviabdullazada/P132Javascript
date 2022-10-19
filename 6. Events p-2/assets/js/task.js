let saveBtn = document.querySelector("#save");
// let boxX = document.getElementById("boxWidth").value; 
// let boxY = document.getElementById("boxHeight").value; 
// let ballXY = document.getElementById("ballWidthAndHeight").value;
let ball = document.querySelector('.ball');
let box = document.querySelector('.box');
let step = document.getElementById("step").value;
resetBall();
saveBtn.addEventListener('click', function(){
})

function resetBall(){
    ball.style.left = (box.clientWidth - ball.clientWidth) / 2 +'px'
    ball.style.top = (box.clientHeight - ball.clientHeight) / 2 +'px'
}
document.body.addEventListener('keydown',e=>{
    if (e.key == 'ArrowUp') {

    }else if(e.key == 'ArrowLeft'){

    }else if(e.key == 'ArrowRight'){
        ball.style.left = parseInt(ball.style.left) + Number(step) +'px';
    }else if(e.key == 'ArrowDown'){

    }
})