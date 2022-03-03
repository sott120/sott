
function download(){
    html2canvas(document.querySelector("#card")).then(canvas => {
    // document.body.appendChild(canvas)
    // $('body').append('<img src="' + canvas.toDataURL("image/jpeg") + '"/>');
    let el = document.getElementById("target");
    el.href = canvas.toDataURL("image/jpeg");
    el.download = "파일명.jpg";
    el.click();  
})
};

//화살표 

let arrow4 = document.querySelectorAll('.choice');
let arrow3 = document.querySelectorAll('.arrow');
let icon = document.querySelectorAll('.menu > .choice > span');

function viewArrow(event){
    console.log("하하")
    console.log(event)

    let arrowArr = Object.values(arrow3); //https://bobbyhadz.com/blog/javascript-typeerror-object-map-is-not-a-function

    arrowArr.map((i,index) => { // arrow를 전부 display none 처리
        i.style.display = "none";
    });

    event.target.childNodes[2].style.display = 'block'; // event가 일어난 세번째 자식요소(arrow)의 스타일을 변경
};

function clickArrow(event){
    event.stopPropagation() //https://gcomx.blogspot.com/2018/02/blog-post_20.html
    console.log("화살표")
};

document.querySelectorAll('.choice')[0].addEventListener('click',viewArrow);
document.querySelectorAll('.choice')[1].addEventListener('click',viewArrow);
document.querySelectorAll('.choice')[2].addEventListener('click',viewArrow);
document.querySelectorAll('.choice')[3].addEventListener('click',viewArrow);
document.querySelectorAll('.choice')[4].addEventListener('click',viewArrow);
document.querySelectorAll('.choice')[5].addEventListener('click',viewArrow);
document.querySelectorAll('.choice')[6].addEventListener('click',viewArrow);
document.getElementsByClassName('arrow')[0].addEventListener('click',clickArrow);
document.getElementsByClassName('arrow')[1].addEventListener('click',clickArrow);
document.getElementsByClassName('arrow')[2].addEventListener('click',clickArrow);
document.getElementsByClassName('arrow')[3].addEventListener('click',clickArrow);
document.getElementsByClassName('arrow')[4].addEventListener('click',clickArrow);
document.getElementsByClassName('arrow')[5].addEventListener('click',clickArrow);
document.getElementsByClassName('arrow')[6].addEventListener('click',clickArrow);







function cercleClick(event){
// console.log(event.target.classList);

    if (event.target.classList[1] === "choice_click") {
        event.target.classList.remove("choice_click");
    } else { 
        for (let i = 0; i < arrow4.length; i++) {
            arrow4[i].classList.remove("choice_click");
        }

        event.target.classList.add("choice_click")
    }
}

function init() {
    for (let i = 0; i < arrow4.length; i++) {
      arrow4[i].addEventListener("click", cercleClick);
    }
  }

  init();
