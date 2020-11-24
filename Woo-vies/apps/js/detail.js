const fs = require("fs");
let data = fs.readFileSync("./apps/js/db.json");
let db = JSON.parse(data);

//window.addEventListener('load', function(){
    for (var i = 0; i < db.length; i++) {
        if (db[i].name == "Avengers: Endgame") {
            var str;
            if (db[i].added == "true") {
                str += "<script type=\"text/javascript\" src=\"../js/watchlist.js\"></script>";
                str += "<button onclick=\"change_avengers()\" id=\"add\" value=\"Remove\" class=\"button\">Remove from Watchlist</button>";
            }

            else {
                str += "<script type=\"text/javascript\" src=\"../js/watchlist.js\"></script>";
                str += "<button onclick=\"change_avengers()\" id=\"add\" value=\"Add\" class=\"button\">Add to Watchlist</button>";
            }

            var buttondiv = document.getElementById("button-change");
            buttondiv.innerHTML = "";
            buttondiv.innerHTML = str;

        }
    }

    
//});
