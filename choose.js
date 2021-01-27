console.log("choose.js loaded")

function choiceyn(variables){
    variables.choosing.choices = [y, n, yes, no]
    variables.choosing.choiceyn = prompt("Please enter your name", "Harry Potter").toLowerCase
    if (variables.choosing.choiceyn == "yes"){
        console.log("Yes")
        variables.choosing.choiceyn = "y"
    }
    if (variables.choosing.choiceyn == "y"){
        console.log("Yes")
        variables.choosing.choiceyn = "y"
    }
        
    if (variables.choosing.choiceyn == "no"){
        console.log("No")
        variables.choosing.choiceyn = "n"
    }
    
    if (variables.choosing.choiceyn == "n"){
        console.log("No")
        variables.choosing.choiceyn = "n"
    }   else    {
        console.log("Please enter on of the following: y, n, yes, no")
        variables.choosing.choiceyn(variables)
    }
    console.log(variables.choosing.choice)
    
}
function choice123(variables){
    console.log("")
    variables.choosing.choices = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log("variables.choosing.choices: " + variables.choosing.choices)
    variables.choosing.choice = parseInt(prompt("Number from 1 to somthing like 9"));
    console.log(variables.choosing.choice)
}

function choosenumber(variables){
    console.log("Choose amount: ")
    variables.choosing.choice = parseInt(prompt("Choose amount"));
    console.log(variables.choosing.choice);
}