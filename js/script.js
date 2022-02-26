
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

function viewArrow(){
    console.log("하하");
    let arrow2 = document.getElementsByClassName(".arrow");
    let test = document.getElementById("#test");
 console.log(test);
 test.style.display = "none";

arrow2.style.display = "block";


}