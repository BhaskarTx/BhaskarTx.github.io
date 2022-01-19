var btnTrans = document.querySelector("#btn");
var btnRefresh = document.querySelector("#rfrsh");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/groot.json"



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

function refresh(){
        location.reload();
}

btnTrans.addEventListener("click", clickEvent);
btnRefresh.addEventListener("click", refresh);