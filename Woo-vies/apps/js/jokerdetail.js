//const fs = require("fs");
let data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttonjoker = document.getElementById("joker");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "Joker") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttonjoker.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttonjoker.value = "Add";
        }
        buttonjoker.innerHTML = str;     
    }
} 
