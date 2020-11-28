//const fs = require("fs");
let data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttonavengers = document.getElementById("avengers");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "Avengers: Endgame") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttonavengers.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttonavengers.value = "Add";
        }
        buttonavengers.innerHTML = str;     
    }
} 
