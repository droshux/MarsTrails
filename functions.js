// JavaScript source code
function Output(text) {
    document.getElementById("text-box").innerText += text;
}

function OutputRaw(html) {
    document.getElementById("text-box").innerHTML += html;
}

class InputListener {
    constructor(Inputid) {
        this.id = Inputid;
        this.data = "";
    }
    getData() {
        this.data = Submit(this.id);
    }
}

var inputCount = 0;
function Input(Prompt) {
    console.log("Spawned input element")
    document.getElementById("text-box").innerHTML += `${Prompt}<input type=\"text\" class=\"input-box\" id=\"input${inputCount}\"></input>`
    inputCount++;
    return inputCount - 1
}

function Submit(inputID) {
    return document.getElementById(`input${inputID}`).value;
}

function Button(text, onclick) {
    document.getElementById("text-box").innerHTML += `<button class=\"button\" onclick=\"${onclick}\">${text}</button>`;
}

function ImageInsert(id, width, height) {
    document.getElementById("text-box").innerHTML += `<img src="${document.getElementById(id).src}" width="${width}" height="${height}" />`;
}

function SetBackground(id) {
    document.getElementById("background-image").src = document.getElementById(id).src;
}

function ClearScreen() {
    inputCount = 0;
    document.getElementById("text-box").innerHTML = "";
}