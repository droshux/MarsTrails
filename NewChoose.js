// JavaScript source code
function ChoiceYN() {
    var inputBox = Input("Please enter Y or N")
    
    Button("Submit", `var Answer;Answer = Submit(${inputBox}).ToLower();document.getElementById("DATA-STORE").innerHTML = Answer;`)

    setInterval(function () {
        var Answer
        Answer = document.getElementById("DATA-STORE").innerHTML;
        if (Answer[0] == "y") {
            return true
        }
        if (Answer[0] == "n") {
            return false
        }},100)
    
}