
//화면 이미지로 저장
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
document.getElementById("date").value = year + month + day;



//동그라미 클릭 시 작동

let arrow4 = document.querySelectorAll('.choice');
let arrow3 = document.querySelectorAll('.arrow');
let icon = document.querySelectorAll('.menu > .choice > span');


function clickArrow(event){
    event.stopPropagation() //https://gcomx.blogspot.com/2018/02/blog-post_20.html
};

function cercleClick(event){

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
      };

    init();
   


    //화살표 클릭 시 작동
    // https://goddino.tistory.com/45

      let num1 = 1;
      let num2 = 1;
      let num3 = 1;
      let num4 = 1;
      let num5 = 1;

      
      function hairSlide(idx){

          if (idx) {
              if (num1 == 8) return;
              num1++;
          } else {
              if (num1 == 1) return;
              num1--;
          }
        let hairImg = document.getElementById("hair");
        hairImg.setAttribute("src", "/sorce/hair0" + num1 + ".png");
      };

      function browSlide(idx){
        if (idx) {
            if (num2 == 8) return;
            num2++;
        } else {
            if (num2 == 1) return;
            num2--;
        }
      let browsImg = document.getElementById("brows");
      browsImg.setAttribute("src", "/sorce/brows0" + num2 + ".png");
    };

    function eyesSlide(idx){
        if (idx) {
            if (num3 == 6) return;
            num3++;
        } else {
            if (num3 == 1) return;
            num3--;
        }
      let eyesImg = document.getElementById("eyes");
      eyesImg.setAttribute("src", "/sorce/eyes0" + num3 + ".png");
    };

    function lipsSlide(idx){
        if (idx) {
            if (num4 == 7) return;
            num4++;
        } else {
            if (num4 == 1) return;
            num4--;
        }
      let lipsImg = document.getElementById("lips");
      lipsImg.setAttribute("src", "/sorce/lips0" + num4 + ".png");
    };

    function clothSlide(idx){
        if (idx) {
            if (num5 == 8) return;
            num5++;
        } else {
            if (num5 == 1) return;
            num5--;
        }
      let clothImg = document.getElementById("cloth");
      clothImg.setAttribute("src", "/sorce/cloth0" + num5 + ".png");
    };