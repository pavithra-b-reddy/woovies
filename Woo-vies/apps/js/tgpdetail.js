//const fs = require("fs");
let data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttontgp = document.getElementById("tgp");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "The Good Place") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttontgp.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttontgp.value = "Add";
        }
        buttontgp.innerHTML = str;     
    }
} 
