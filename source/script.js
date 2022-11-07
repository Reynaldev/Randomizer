const textArr = [];

let isRandomized = false;

function Ready() {
    InputFocus();
}

function InputFocus() {
    document.getElementById("InputText").focus();
}

function Copy() {
    alert("Trying to copy this website huh?");
    document.getElementsByTagName("body").disabled = true;
}

function Shortcut() {
    var shortcut = event.key;
    // console.log(shortcut);

    // if (event.ctrlKey) {
    //     console.log("pushhasd");
    //     Randomize();
    //     return;
    // }

    if (shortcut == "Enter") {
        InputTextToArray();
        return;
    }
}

function InputTextToArray() {
    if (isRandomized) {
        alert(`I'm still picking a word! Please wait until i picked a word :)`);
        return;
    }

    let text = document.getElementById("InputText").value;

    if (text.length <= 0) {
        alert(`Do you know how to type? So do it!`);
        return;
    }

    for (let index = 0; index < textArr.length; index++) {
        if (textArr[index] == text) 
        {
            alert("Error! The word you input was already been submitted");
            return;
        }
    }

    textArr.push(text);

    document.getElementById("InputText").value = null;

    // console.log(text);
    ShowData();
    InputFocus();
}

function ShowData() {
    let index = textArr.length;
    
    let tableRow = document.createElement("tr");
    let tableNoData = document.createElement("td");
    let tableTextData = document.createElement("td");

    tableNoData.id = index - 1;
    tableNoData.innerHTML = index;

    tableTextData.innerText = textArr[index - 1];

    document.getElementById("TableBody").appendChild(tableRow).appendChild(tableNoData);
    document.getElementById("TableBody").appendChild(tableRow).appendChild(tableTextData);
}

function DeleteData() {
    if (textArr.length == 0) return;
    
    textArr.pop();
    
    document.getElementById(textArr.length).parentElement.remove();

    alert(`Last word removed`);
}

function DeleteAllData() {
    for (let index = textArr.length - 1; index >= 0; index--) {
        document.getElementById(index).parentElement.remove();
        textArr.pop();
    }

    alert(`All data deleted ;)`);
}

function Randomize() {
    if (textArr.length <= 0) {
        alert("There are no words to pick!\nTry submit some random word! :)");
        return;
    }

    if (isRandomized) {
        alert("Please wait until i picked a word :)");
        return;
    }

    isRandomized = true;

    clearTimeout(StopRandomizer);
    clearInterval(GetRandomWord);

    setTimeout(StopRandomizer, 3000);
    setInterval(GetRandomWord, 100);
}

function GetRandomWord() {
    if (!isRandomized) {
        return;
    }

    var randomIndex = Math.floor(Math.random() * textArr.length);
    var randomText = textArr[randomIndex];

    document.getElementById("RandomizedText").innerHTML = randomText.toUpperCase();

    // console.log(randomText);
}

function StopRandomizer() {
    // console.log("Stopping...");

    isRandomized = false;
}