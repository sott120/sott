
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

let arrow4 = document.querySelectorAll('.choice');

let arrow3 = document.querySelectorAll('.arrow');

<<<<<<< Updated upstream
function viewArrow(event){
    console.log("하하")
    console.log(event)

    let arrowArr = Object.values(arrow3); //https://bobbyhadz.com/blog/javascript-typeerror-object-map-is-not-a-function

    arrowArr.map((i,index) => { // arrow를 전부 display none 처리
        i.style.display = "none";
    });

    event.target.childNodes[1].style.display = 'block'; // event가 일어난 두번째 자식요소(arrow)의 스타일을 변경
};
=======
>>>>>>> Stashed changes

// 없으면 choice_click이 arrow에도 전파가 돼요
function clickArrow(event){
    event.stopPropagation() //https://gcomx.blogspot.com/2018/02/blog-post_20.html
<<<<<<< Updated upstream
    console.log("화살표")

};
document.querySelectorAll('.choice')[0].addEventListener('click',viewArrow);
document.querySelectorAll('.choice')[1].addEventListener('click',viewArrow);
document.querySelectorAll('.choice')[2].addEventListener('click',viewArrow);
document.getElementsByClassName('arrow')[0].addEventListener('click',clickArrow)
document.getElementsByClassName('arrow')[1].addEventListener('click',clickArrow)
document.getElementsByClassName('arrow')[2].addEventListener('click',clickArrow)
=======
};


function cercleClick(event){
// console.log(event.target.classLi
    if (event.target.classList[1] === "choice_click") {
        event.target.classList.remove("choice_click");
        event.target.childNodes[2].classList.remove("arrow_active");
    } else { 
        for (let i = 0; i < arrow4.length; i++) {
            arrow4[i].classList.remove("choice_click");
            arrow3[i].classList.remove("arrow_active");
        }
        event.target.classList.add("choice_click");
        event.target.childNodes[2].classList.add("arrow_active");
    }
}

function init() {
    for (let i = 0; i < arrow4.length; i++) {
      arrow4[i].addEventListener("click", cercleClick);
      arrow3[i].addEventListener("click",clickArrow);
    }
  }
  init();
>>>>>>> Stashed changes
