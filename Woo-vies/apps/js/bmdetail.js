//const fs = require("fs");
let data3 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data3);

var buttonbm = document.getElementById("bm");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "Black Mirror") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttonbm.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttonbm.value = "Add";
        }
        buttonbm.innerHTML = str;     
    }
} 
