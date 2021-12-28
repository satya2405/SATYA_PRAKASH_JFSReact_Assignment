// var gbp, usd, eur, cad, aud;

function convertFunction() {
    var fromCurr = document.getElementById("select-from").value;
    var toCurr = document.getElementById("select-to").value;
    var userInput = document.getElementById("convert-from").value;
    var resultTextbox = document.getElementById("convert-to");

    switch (fromCurr) {
        case "USD":
            switch (toCurr) {
                case "INR":
                    resultTextbox.value = userInput * 75.22;
                    break;
                case "EUR":
                    resultTextbox.value = userInput * 0.70641;
                    break;
                case "USD":
                    resultTextbox.value = userInput;
                    break;
            }
            break;
        case "INR":
            switch (toCurr) {
                case "INR":
                    resultTextbox.value = userInput;
                    break;
                case "EUR":
                    resultTextbox.value = userInput * 0.012;
                    break;
                case "USD":
                    resultTextbox.value = userInput * 0.013;
                    break;
            } 
            break;
        case "EUR":
            switch (toCurr) {
                case "INR":
                    resultTextbox.value = userInput * 85.39;
                    break;
                case "EUR":
                    resultTextbox.value = userInput;
                    break;
                case "USD":
                    resultTextbox.value = userInput * 1.13;
                    break;
            } 
            break;
    }
}
