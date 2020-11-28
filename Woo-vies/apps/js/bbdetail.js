//const fs = require("fs");
let data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttonbb = document.getElementById("bb");


for (var i = 0; i < db.length; i++) {
    if (db[i].name == "Breaking Bad") {
        var str;
        if (db[i].added == "true") {
            str = "Remove from Watchlist";
            buttonbb.value = "Remove"
        }

        else {
            str = "Add to Watchlist";
            buttonbb.value = "Add";
        }
        buttonbb.innerHTML = str;     
    }
} 
