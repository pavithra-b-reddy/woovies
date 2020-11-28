//const fs = require("fs");
let data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttonsplit = document.getElementById("split");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "Split") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttonsplit.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttonsplit.value = "Add";
        }
        buttonsplit.innerHTML = str;     
    }
} 
