const fs = require("fs");
let data = fs.readFileSync("./apps/js/watchlist.json");
let watchlist = JSON.parse(data);

/*
var watchlist = 
[
        {name:"Inception", img:"<img src=\"../assets/posters/inception.jpg\">"},

        {name:"Avengers: Endgame", img:"<img src=\"../assets/posters/endgame.jpg\">"},

        {name:"Black Mirror", img:"<img src=\"../assets/posters/black_mirror.jpg\">"}
        
]*/

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

    //let obj;
    if (str == "Avengers") {
        let avengers = {
            name:"Avengers: Endgame", 
            img:"<img src=\"../assets/posters/inception.jpg\">"
        };
        watchlist2.push(avengers);
    }

    if (str == "Black Mirror") {
        let bm = {
            name:"Black Mirror", 
            img:"<img src=\"../assets/posters/black_mirror.jpg\">"
        };
        watchlist2.push(bm);
    }

    if (str == "Breaking Bad") {
        let bb = {
            name:"Breaking Bad", 
            img:"<img src=\"../assets/posters/breaking_bad.jpg\">"
        };
        watchlist2.push(bb);
    }

    if (str == "Joker") {
        let avengers = {
            name:"Avengers: Endgame", 
            img:"<img src=\"../assets/posters/inception.jpg\">"
        };
        watchlist2.push(avengers);
    }

    if (str == "Joker") {
        let joker = {
            name: "Joker",
            img: "<img src=\"../assets/posters/joker.jpg\">"
        };
        watchlist2.push(joker);
    }

    fs.writeFileSync("./apps/js/watchlist.json", JSON.stringify(watchlist2));
}

function remove(str) {
    if (str == "Avengers") {
        for (var i = 0; i < watchlist.length; i++) {
            if (watchlist[i].name == "Avengers: Endgame") {
                watchlist.splice(i, 1);
            }
        }

        for (var i = 0; i < watchlist.length; i++) {
            console.log(watchlist[i].name);
        }
    }

}

function change_avengers() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Avengers");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Avengers");
    }

}

function change_bm() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Black Mirror");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Black Mirror");
    }

}

function change_bb() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Breaking Bad");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Breaking Bad");
    }

}

function change_inception() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Inception");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Inception");
    }

}

function change_joker() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Joker");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Joker");
    }

}

function change_jp() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Jurassic Park");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Jurassic Park");
    }

}

function change_sherlock() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Sherlock");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Sherlock");
    }

}

function change_split() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Split");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Split");
    }

}

function change_st() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("Stranger Things");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("Stranger Things");
    }

}

function change_tgp() {
    var button = document.getElementById("add");
    if (button.value == "Add") {
        button.value = "Remove";
        button.innerHTML = "Remove from Watchlist";
        add("The Good Place");

    }

    else {
        button.value = "Add";
        button.innerHTML = "Add to Watchlist";
        remove("The Good Place");
    }

}