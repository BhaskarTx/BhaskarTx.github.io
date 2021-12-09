var btnTrans = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
function clickEvent(){
        // console.log("clicked");
        // console.log("input is - > ", txtInput.value);
        txtOutput.innerText = "translated "+ txtInput.value;
}

btnTrans.addEventListener("click", clickEvent);
