// Step-1 : Hide pin match and don't match lines by default.
// Step-2 : Generate random number onClick generate pin.
// Step-3: Show input number onclick number's.
// Step-4: check if pin code and input numbers are match or not onClick submit button. if match show pin matched, if don't show pin didn't match.

// Step-5: Clear one by one onClick backspace button.
//Step-6: Clear all onclick clear button.
//step-7: show how many tries left onclick submit.

// Generate random number onClick generate pin.

// varriables used
const notifyMatched = document.getElementById("notify-matched");
const notifyNotMatched = document.getElementById("notify-not-matched");
const generateBtn = document.getElementById("generateBtn");
const submitBtn = document.getElementById("submitBtn");
const number = document.getElementsByClassName("number");
const operator = document.getElementsByClassName("operator");

// generate 4 digit numbers
function getRandomInt() {
    return Math.floor(1000 + Math.random() * 9000);
}
//get pin Input 
function getPinInput() {
    return document.getElementById("pinInput").value;
}
//set pin input
function printPinInput(num) {
    return document.getElementById("pinInput").value = num;
}

//get output 
function getOutput() {
    return document.getElementById("outputValue").value;
}

//set output 
function printOutput(num) {
    return document.getElementById("outputValue").value = num;
}

// Transfer pinInput and output value to numbers
function NumberFormat(num) {
    return Number(num);
}
// if matched add-remove classes 
function ifMacthed() {
    notifyMatched.classList.remove("d-none");
    notifyMatched.classList.add("d-block");
    notifyNotMatched.classList.remove("d-block");
    notifyNotMatched.classList.add("d-none");
}
// if not machted add-remove classes
function ifNotMacthed() {
    notifyMatched.classList.remove("d-block");
    notifyMatched.classList.add("d-none");
    notifyNotMatched.classList.remove("d-none");
    notifyNotMatched.classList.add("d-block");
}
//  if matched or not matched
function ifMacthOrNot() {
    let pinInput = NumberFormat(getPinInput());
    let output = NumberFormat(getOutput());
    if (pinInput == output) {
        ifMacthed();
    } else {
        ifNotMacthed();
    }
}

//  set Random Number to input field

generateBtn.addEventListener("click", function () {
    printPinInput(getRandomInt());
})


// get and set Number onclick

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        let output = getOutput();
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    })
}

// Clear all on clicking 'C' and remove last one on clicking backspace

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printOutput("");
        } else if (this.id == "backspace") {
            let output = getOutput();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }

        }
    })
}


// show notification on click submit button
submitBtn.addEventListener("click", function () {
    ifMacthOrNot();
})