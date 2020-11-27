const fs = require("fs");
let data = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data);

var buttonavengers = document.getElementById("avengers");


//function onLoad() {
    var str;
    for (var i = 0; i < db.length; i++) {
        if (db[i].name == "Avengers: Endgame") {

            if (db[i].added == "true") {
                str += "<script type=\"text/javascript\" src=\"../js/watchlist.js\"></script>";
                str += "<button onclick=\"change_avengers()\" id=\"add\" value=\"Remove\" class=\"button\">Remove from Watchlist</button>";
            }

            else {
                str += "<script type=\"text/javascript\" src=\"../js/watchlist.js\"></script>";
                str += "<button onclick=\"change_avengers()\" id=\"add\" value=\"Add\" class=\"button\">Add to Watchlist</button>";
            }
            
            buttonavengers.innerHTML = str;     
        }
    }

    
//});
