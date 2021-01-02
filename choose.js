console.log("choose.js loaded")

function choiceyn(variables){
    variables.choosing.choices = [y, n, yes, no]
    var inputID = Input("Please enter yes or no:");
    variables.choosing.choiceyn = Submit(inputID).toLowerCase;
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
function choice123(options){
    inputID = Input(`Pick from: ${options}`);
    var out;
    Button("Submit", "out=Submit(inputID)")
    while (!(out in options)) {}
    return out;
}

function choosenumber(variables) {
    inputID = Input("Choose amount:")
    variables.choosing.choosenumber = Submit(inputID)
}