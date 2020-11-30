//const fs = require("fs");
let data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttonst = document.getElementById("st");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "Stranger Things") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttonst.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttonst.value = "Add";
        }
        buttonst.innerHTML = str;     
    }
} 
