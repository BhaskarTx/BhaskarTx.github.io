var btnTrans = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/"

function getTranslateURL(text) {
        return serverURL + "?text=" + text
}


function clickEvent() {
        // console.log("clicked");
        // console.log("input is - > ", txtInput.value);
        // txtOutput.innerText = "translated "+ txtInput.value;
        var inputText = txtInput.value;
        fetch(getTranslateURL(inputText))
                .then(response => response.json)
                .then(json => console.log(json))

}

btnTrans.addEventListener("click", clickEvent);