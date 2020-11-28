//const fs = require("fs");
let data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttoninception = document.getElementById("inception");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "Inception") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttoninception.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttoninception.value = "Add";
        }
        buttoninception.innerHTML = str;     
    }
} 
