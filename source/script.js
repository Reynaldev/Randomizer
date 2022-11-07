const textArr = [];

let isRandomized = false;

function Copy() {
    alert("Trying to copy this website huh?");
    document.getElementsByTagName("body").disabled = true;
}

function InputTextToArray() {
    let text = document.getElementById("InputText").value;

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
}

function ShowData() {
    let index = textArr.length;

    let tableRow = document.createElement("tr");
    let tableNoData = document.createElement("td");
    let tableTextData = document.createElement("td");

    tableNoData.id = index - 1;
    tableNoData.innerHTML = index;

    tableTextData.innerText = textArr[index - 1];

    document.getElementById("TextTable").appendChild(tableRow).appendChild(tableNoData);
    document.getElementById("TextTable").appendChild(tableRow).appendChild(tableTextData);
}

function DeleteData() {
    if (textArr.length == 0) return;
    
    textArr.pop();
    
    document.getElementById(textArr.length).parentElement.remove();

    alert(`Last word removed`);
}

function Randomize() {
    isRandomized = true;

    clearInterval(StopRandomizer);
    clearInterval(GetRandomWord);

    setInterval(StopRandomizer, 3000);
    setInterval(GetRandomWord, 100);
}

function GetRandomWord() {
    if (!isRandomized) {
        clearInterval(GetRandomWord);
        return;
    }

    var randomIndex = Math.floor(Math.random() * textArr.length);
    var randomText = textArr[randomIndex];

    document.getElementById("RandomizedText").innerHTML = randomText;

    console.log(randomText);
}

function StopRandomizer() {
    console.log("Stopping...");

    isRandomized = false;

    clearInterval(GetRandomWord);
}