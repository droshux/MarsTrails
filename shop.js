//testing XD
console.log("shop.js loaded")



function listprint(variables){
    Output("")
    Output("")
    Output("Shop options:")
    Output("")
    Output("1. Food")
    Output("2. Water")
    Output("3. Spair parts")
    Output("4. Parts")
    Output("")
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
    Output("")
    Output("Food:")
    Output("Food variables.costs $"+ variables.costs.food +" per kg,")
    Output("")
    choosenumber(variables)
    variables.suplies.food += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.food)
    Output("Food:" + variables.suplies.food + "   Money:" + variables.costs.money)
    //listprint(variables)
}

function Waterbuy(variables){
    Output("")
    Output("Water:")
    Output("water variables.costs $"+ variables.costs.food +" per kg,")
    Output("")
    choosenumber(variables)
    variables.suplies.water += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.water)
    Output("Water:" + variables.suplies.food + "   Money:" + variables.costs.money)
    //listprint(variables)
}

function Spairpartsbuy(variables){
    Output("")
    Output("Spair Parts:")
    Output("")
    Output("1. Solar panels")
    Output("2. Water filtration")
    Output("3. Air scrubers")
    Output("")
    Output("")
    choice123(variables)
    
}

function Solarspair(variables){
    Output("")
    Output("Solar panels:")
    Output("spair solar pannels cost $" + variables.costs.spairparts.solars)
    choosenumber(variables)
    variables.suplies.spareparts.solarpannel += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.spairparts.solars)
    Output("Spair solar panels:" + variables.suplies.food + "   Money:" + variables.costs.money)
    //listprint(variables)
}

function waterfilterspair(variables){
    Output("")
    Output("Water filters:")
    Output("spair water filters cost $" + variables.costs.spairparts.waterfilter)
    choosenumber(variables)
    variables.suplies.spareparts.waterfiltration += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.spairparts.waterfilter)
    Output("Spair waterfilterers:" + variables.suplies.spareparts.waterfiltration + "   Money:" + variables.costs.money)
    //listprint(variables)
}

function airscruberspair(variables){
    Output("")
    Output("Air scrubers:")
    Output("spair air scrubers cost $" + variables.costs.spairparts.airscruber)
    choosenumber(variables)
    variables.suplies.spareparts.airscruber += variables.choosing.choicenumber
    variables.costs.money -= (variables.choosing.choicenumber * variables.costs.spairparts.airscruber)
    Output("Spair air scrubers:" + variables.suplies.spareparts.airscruber + "   Money:" + variables.costs.money)
    //listprint(variables)
}

