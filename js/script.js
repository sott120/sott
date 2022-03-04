
function download(){
    html2canvas(document.querySelector("#card")).then(canvas => {
    // document.body.appendChild(canvas)
    // $('body').append('<img src="' + canvas.toDataURL("image/jpeg") + '"/>');
    let el = document.getElementById("target");
    let eel = document.getElementById('name');
    eel.style.height = eel.scrollHeight + 'px';
    el.href = canvas.toDataURL("image/jpeg");
    el.download = "등록증.jpg";
    el.click();  
})
};


//날짜호출
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
if ( month < 10) month = "0" + month;
if ( day < 10) day = "0" + day;
console.log(day)
document.getElementById("date").value = year + month + day;





//화살표

let arrow4 = document.querySelectorAll('.choice');
let arrow3 = document.querySelectorAll('.arrow');
let icon = document.querySelectorAll('.menu > .choice > span');


function clickArrow(event){
    event.stopPropagation() //https://gcomx.blogspot.com/2018/02/blog-post_20.html
};

function cercleClick(event){
    // console.log(event.target.classLi
        if (event.target.classList[1] === "choice_click") {
            event.target.classList.remove("choice_click");
            event.target.childNodes[2].classList.remove("arrow_active");
            event.target.childNodes[0].classList.remove("icon_active");
        } else { 
            for (let i = 0; i < arrow4.length; i++) {
                arrow4[i].classList.remove("choice_click");
                arrow3[i].classList.remove("arrow_active");
                icon[i].classList.remove("icon_active");
            }
            event.target.classList.add("choice_click");
            event.target.childNodes[2].classList.add("arrow_active");
            event.target.childNodes[0].classList.add("icon_active");
        }
    }
    
    function init() {
        for (let i = 0; i < arrow4.length; i++) {
          arrow4[i].addEventListener("click", cercleClick);
          arrow3[i].addEventListener("click",clickArrow);
        }
      }
      init();



      let num = 1;
      function hairSlide(idx){
          if (idx) {
              if (num == 8) return;
              num++;
          } else {
              if (num == 1) return;
              num--;
          }
        let hairImg = document.getElementById("hair");
        hairImg.setAttribute("src", "/sorce/hair0" + num + ".png");
      };

      function browSlide(idx){
        if (idx) {
            if (num == 8) return;
            num++;
        } else {
            if (num == 1) return;
            num--;
        }
      let browsImg = document.getElementById("brows");
      browsImg.setAttribute("src", "/sorce/brows0" + num + ".png");
    };

    function eyesSlide(idx){
        if (idx) {
            if (num == 6) return;
            num++;
        } else {
            if (num == 1) return;
            num--;
        }
      let eyesImg = document.getElementById("eyes");
      eyesImg.setAttribute("src", "/sorce/eyes0" + num + ".png");
    };

    function lipsSlide(idx){
        if (idx) {
            if (num == 7) return;
            num++;
        } else {
            if (num == 1) return;
            num--;
        }
      let lipsImg = document.getElementById("lips");
      lipsImg.setAttribute("src", "/sorce/lips0" + num + ".png");
    };

    function clothSlide(idx){
        if (idx) {
            if (num == 8) return;
            num++;
        } else {
            if (num == 1) return;
            num--;
        }
      let clothImg = document.getElementById("cloth");
      clothImg.setAttribute("src", "/sorce/cloth0" + num + ".png");
    };