//testing XD
console.log("shop.js loaded")



function listprint(variables){
    console.log("")
    console.log("")
    console.log("Shop options:")
    console.log("")
    console.log("1. Food")
    console.log("2. Water")
    console.log("3. Spair parts")
    console.log("4. Parts")
    console.log("")
    choice123(variables)
    if (variables.choosing.choice == 1){
        Foodbuy(variables)
    }
    if (variables.choosing.choice == 2){
        Waterbuy(variables)
    }
    if (variables.choosing.choice == 3){
        Spairpartsbuy(variables)
    }
    if (variables.choosing.choice == 4){
        console.log("Function not yet made (Parts buy)")
    }
}

function Foodbuy(variables){
    console.log("")
    console.log("Food:")
    console.log("Food variables.costs $"+ variables.costs.food +" per kg,")
    console.log("")
    choosenumber(variables)
    variables.suplies.food += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.food)
    console.log("Food:" + variables.suplies.food + "   Money:" + variables.costs.money)
    //listprint(variables)
}

function Waterbuy(variables){
    console.log("")
    console.log("Water:")
    console.log("water variables.costs $"+ variables.costs.food +" per kg,")
    console.log("")
    choosenumber(variables)
    variables.suplies.water += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.water)
    console.log("Water:" + variables.suplies.food + "   Money:" + variables.costs.money)
    //listprint(variables)
}

function Spairpartsbuy(variables){
    console.log("")
    console.log("Spair Parts:")
    console.log("")
    console.log("1. Solar panels")
    console.log("2. Water filtration")
    console.log("3. Air scrubers")
    console.log("")
    console.log("")
    choice123(variables)
    
}

function Solarspair(variables){
    console.log("")
    console.log("Solar panels:")
    console.log("spair solar pannels cost $" + variables.costs.spairparts.solars)
    choosenumber(variables)
    variables.suplies.spareparts.solarpannel += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.spairparts.solars)
    console.log("Spair solar panels:" + variables.suplies.food + "   Money:" + variables.costs.money)
    //listprint(variables)
}

function waterfilterspair(variables){
    console.log("")
    console.log("Water filters:")
    console.log("spair water filters cost $" + variables.costs.spairparts.waterfilter)
    choosenumber(variables)
    variables.suplies.spareparts.waterfiltration += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.spairparts.waterfilter)
    console.log("Spair waterfilterers:" + variables.suplies.spareparts.waterfiltration + "   Money:" + variables.costs.money)
    //listprint(variables)
}

function airscruberspair(variables){
    console.log("")
    console.log("Air scrubers:")
    console.log("spair air scrubers cost $" + variables.costs.spairparts.airscruber)
    choosenumber(variables)
    variables.suplies.spareparts.airscruber += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.spairparts.airscruber)
    console.log("Spair air scrubers:" + variables.suplies.spareparts.airscruber + "   Money:" + variables.costs.money)
    //listprint(variables)
}

