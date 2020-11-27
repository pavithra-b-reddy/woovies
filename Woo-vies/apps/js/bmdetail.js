//const fs = require("fs");
data2 = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data2);

var buttonbm = document.getElementById("bm");


//function onLoad() {
    var str;
    for (var i = 0; i < db.length; i++) {
        if (db[i].name == "Black Mirror") {

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
//}
