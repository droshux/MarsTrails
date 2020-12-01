console.log("vars.js loaded")

var variables = {
    suplies : {
        food: 0,
        water: 0,
        wastewater: 0,
        oxygen: 1000,
        carbono2: 0,
        fuel: 0,
        spareparts : {
            solarpannel: 0,
            waterfiltration: 0,
            oxygenfiltration: 0
        },
        parts : {
            waterfilter : 0,
            airscruber : 0,
        }

    },
    basic : {
        timeleft: 1000,
        health: 0
    },
    counts : {
        accept:0,
        speed:10,
        choose:true
    },
    names : {
        playermain : "Playermain",
        player1 : "Player1",
        player2 : "Player2",
        player3 : "Player3",
        player4 : "Player4",
        player5 : "Player5"
    },
    costs : {
        money : 10000,
        food : 5,
        water : 0.1,
        fuel : 3,
        spairparts:{
            solars : 150,
            waterfilter : 150,
            airscruber : 150 
        }
    },
    choosing : {
        choice : 0,
        choiceyn : "n",
        choices : ["y", "n", "yes", "no"]
    }
}
