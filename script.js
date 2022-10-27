const textArr = [];

var i = 0;

function InputTextToArray() 
{
    let text = document.getElementById("InputText").value;

    for (let index = 0; index < textArr.length; index++) {
        if (textArr[index] == text) 
        {
            alert("Error! One or more text that you already input is there");
            return;
        }
    }

    textArr.push(text);

    // console.log(text);
    GetTextArray();
}

function GetTextArray() 
{
    let tableRow = document.createElement("tr");
    let tableNoData = document.createElement("td");
    let tableTextData = document.createElement("td");
    let tableActionData = document.createElement("td");
    let tableActionButton = document.createElement("input");

    tableNoData.innerHTML = i;

    tableTextData.innerText = textArr[i];

    tableActionButton.id = i;
    tableActionButton.type = "submit";
    tableActionButton.value = "Delete";
    tableActionButton.onclick = function () {
        GetArrayId(tableActionButton.id);
    }

    tableActionData.appendChild(tableActionButton);

    document.getElementById("TextTable").appendChild(tableRow).appendChild(tableNoData);
    document.getElementById("TextTable").appendChild(tableRow).appendChild(tableTextData);
    document.getElementById("TextTable").appendChild(tableRow).appendChild(tableActionData);

    i++;
}

function GetArrayId(id)
{
    alert("This worked! ID: " + id);

    // let tableId = document.;
    // console.log(tableId);
}