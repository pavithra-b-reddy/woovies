//const fs = require("fs");
let data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttonjp = document.getElementById("jp");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "Jurassic Park") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttonjp.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttonjp.value = "Add";
        }
        buttonjp.innerHTML = str;     
    }
} 
