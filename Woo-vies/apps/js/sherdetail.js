//const fs = require("fs");
let data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttonsherlock = document.getElementById("sherlock");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "Sherlock") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttonsherlock.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttonsherlock.value = "Add";
        }
        buttonsherlock.innerHTML = str;     
    }
} 
