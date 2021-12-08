var btnTrans = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

function clickEvent(){
        console.log("clicked");
        console.log("input is - > ", txtInput.value);
}

btnTrans.addEventListener("click", clickEvent);
