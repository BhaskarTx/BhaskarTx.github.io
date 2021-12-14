var btnTrans = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/groot.json"
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";



function getTranslateURL(text) {
        return serverURL + "?text=" + text
}

function errorHandler(error) {
        console.log("error occured", error);
        alert("something wrong with server ! try again later");
}

function clickEvent() {
        // console.log("clicked");
        // console.log("input is - > ", txtInput.value);
        // txtOutput.innerText = "translated "+ txtInput.value;
        var inputText = txtInput.value;
        fetch(getTranslateURL(inputText))
                .then(response => response.json())
                .then(json => {
                                var translatedText = json.contents.translated;
                                txtOutput.textContent = translatedText;
                        }


                        // txtOutput.textContent(json.contents.translated)
                )
                // .then(json => console.log(json.contents.translated))

                .catch(errorHandler);

}

btnTrans.addEventListener("click", clickEvent);