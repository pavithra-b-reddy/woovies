const fs = require("fs");
let data = fs.readFileSync("./apps/js/watchlist.json");
let watchlist = JSON.parse(data);

    string = "";
    for (var i = 0; i < watchlist.length; i++) {
        if (watchlist[i]["name"] == "Inception") {
            string += "<a href=\"details/Inception.html\">"
        }

        else if (watchlist[i]["name"] == "Avengers: Endgame") {
            string += "<a href=\"details/Avengers_Endgame.html\">"
        }

        else if (watchlist[i]["name"] == "Black Mirror") {
            string += "<a href=\"details/Black Mirror.html\">"
        }

        else if (watchlist[i]["name"] == "Breaking Bad") {
            string += "<a href=\"details/Breaking Bad.html\">"
        }

        else if (watchlist[i]["name"] == "Joker") {
            string += "<a href=\"details/Joker.html\">"
        }

        else if (watchlist[i]["name"] == "Jurassic Park") {
            string += "<a href=\"details/Jurassic Park.html\">"
        }

        else if (watchlist[i]["name"] == "Sherlock") {
            string += "<a href=\"details/Sherlock.html\">"
        }

        else if (watchlist[i]["name"] == "Split") {
            string += "<a href=\"details/Split.html\">"
        }

        else if (watchlist[i]["name"] == "Stranger Things") {
            string += "<a href=\"details/Stranger Things.html\">"
        }

        else if (watchlist[i]["name"] == "The Good Place") {
            string += "<a href=\"details/The Good Place.html\">"
        }

        string += watchlist[i]["img"];
        string += "</a>"
    }

    document.getElementById('column').innerHTML = string;


function add(str) {
    let data2 = fs.readFileSync("./apps/js/watchlist.json");
    let watchlist2 = JSON.parse(data);

    if (str == "Avengers") {
        let avengers = {
            name:"Avengers: Endgame", 
            img:"<img src=\"../assets/posters/endgame.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(avengers);
    }

    if (str == "Black Mirror") {
        let bm = {
            name:"Black Mirror", 
            img:"<img src=\"../assets/posters/black_mirror.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(bm);
    }

    if (str == "Breaking Bad") {
        let bb = {
            name:"Breaking Bad", 
            img:"<img src=\"../assets/posters/breaking_bad.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(bb);
    }

    if (str == "Inception") {
        let inception = {
            name:"Inception", 
            img:"<img src=\"../assets/posters/inception.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(inception);
    }

    if (str == "Joker") {
        let joker = {
            name: "Joker",
            img: "<img src=\"../assets/posters/joker.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(joker);
    }

    if (str == "Jurassic Park") {
        let jp = {
            name:"Jurassic Park", 
            img:"<img src=\"../assets/posters/jurassic.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(jp);
    }

    if (str == "Sherlock") {
        let sherlock = {
            name:"Sherlock", 
            img:"<img src=\"../assets/posters/sherlock.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(sherlock);
    }

    if (str == "Split") {
        let split = {
            name:"Split", 
            img:"<img src=\"../assets/posters/split.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(split);
    }

    if (str == "Stranger Things") {
        let st = {
            name:"Stranger Things", 
            img:"<img src=\"../assets/posters/stranger_things.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(st);
    }

    if (str == "The Good Place") {
        let tgp = {
            name:"The Good Place", 
            img:"<img src=\"../assets/posters/good_place.jpg\" class=\"zoom\">",
            added: "true"
        };
        watchlist2.push(tgp);
    }

    fs.writeFileSync("./apps/js/watchlist.json", JSON.stringify(watchlist2));
}



function remove(str) {
    let data2 = fs.readFileSync("./apps/js/watchlist.json");
    let watchlist2 = JSON.parse(data);

    if (str == "Avengers") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "Avengers: Endgame") {
                watchlist2.splice(i, 1);
            }
        }
    }

    if (str == "Black Mirror") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "Black Mirror") {
                watchlist2.splice(i, 1);
            }
        }
    }

    if (str == "Breaking Bad") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "Breaking Bad") {
                watchlist2.splice(i, 1);
            }
        }
    }

    if (str == "Inception") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "Inception") {
                watchlist2.splice(i, 1);
            }
        }
    }

    if (str == "Joker") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "Joker") {
                watchlist2.splice(i, 1);
            }
        }
    }

    if (str == "Jurassic Park") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "Jurassic Park") {
                watchlist2.splice(i, 1);
            }
        }
    }

    if (str == "Sherlock") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "Sherlock") {
                watchlist2.splice(i, 1);
            }
        }
    }

    if (str == "Split") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "Split") {
                watchlist2.splice(i, 1);
            }
        }
    }

    if (str == "Stranger Things") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "Stranger Things") {
                watchlist2.splice(i, 1);
            }
        }
    }

    if (str == "The Good Place") {
        for (var i = 0; i < watchlist2.length; i++) {
            if (watchlist2[i].name == "The Good Place") {
                watchlist2.splice(i, 1);
            }
        }
    }

    fs.writeFileSync("./apps/js/watchlist.json", JSON.stringify(watchlist2));

}



function change_avengers() {
    let data = fs.readFileSync("./apps/js/db.json");
    let db = JSON.parse(data);
    //add and remove change is for responsiveness purpose only,
    //the page is supposed to load using details.js and whats in the json db
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";

        add("Avengers");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Avengers: Endgame") {
                db[i].added = "true";
            }
        }
    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";

        remove("Avengers");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Avengers: Endgame") {
                db[i].added = "false";
            }
        }
    }

    fs.writeFileSync("./apps/js/db.json", JSON.stringify(db));
}

//change the rest like the one above
function change_bm() {
    var button = document.getElementById("bm");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Black Mirror");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Black Mirror");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Black Mirror") {
                db[i].added = "false";
            }
        }
    }

}

function change_bb() {
    var button = document.getElementById("bb");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Breaking Bad");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Breaking Bad");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Breaking Bad") {
                db[i].added = "false";
            }
        }
    }

}

function change_inception() {
    var button = document.getElementById("inception");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Inception");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Inception") {
                db[i].added = "true";
            }
        }


    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Inception");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Inception") {
                db[i].added = "false";
            }
        }
    }

}

function change_joker() {
    var button = document.getElementById("joker");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Joker");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Joker") {
                db[i].added = "true";
            }
        }


    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Joker");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Joker") {
                db[i].added = "false";
            }
        }
    }

}

function change_jp() {
    var button = document.getElementById("jp");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Jurassic Park");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Jurassic Park") {
                db[i].added = "true";
            }
        }


    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Jurassic Park");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Jurassic Park") {
                db[i].added = "false";
            }
        }
    }

}

function change_sherlock() {
    var button = document.getElementById("sherlock");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Sherlock");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Sherlock") {
                db[i].added = "true";
            }
        }


    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Sherlock");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Sherlock") {
                db[i].added = "false";
            }
        }
    }

}

function change_split() {
    var button = document.getElementById("split");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Split");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Split") {
                db[i].added = "true";
            }
        }


    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Split");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Split") {
                db[i].added = "false";
            }
        }
    }

}

function change_st() {
    var button = document.getElementById("st");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Stranger Things");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Stranger Things") {
                db[i].added = "true";
            }
        }


    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Stranger Things");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "Stranger Things") {
                db[i].added = "false";
            }
        }
    }

}

function change_tgp() {
    var button = document.getElementById("tgp");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("The Good Place");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "The Good Place") {
                db[i].added = "true";
            }
        }


    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("The Good Place");
        for (var i = 0; i < db.length; i++) {
            if (db[i].name == "The Good Place") {
                db[i].added = "false";
            }
        }
    }

}
