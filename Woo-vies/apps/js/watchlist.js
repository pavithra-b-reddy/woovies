var watchlist = 
[
        {name:"Inception", img:"<img src=\"../assets/posters/inception.jpg\">"},

        {name:"Avengers: Endgame", img:"<img src=\"../assets/posters/endgame.jpg\">"},

        {name:"Black Mirror", img:"<img src=\"../assets/posters/black_mirror.jpg\">"}
        
]

    string = "";
    for (var i = 0; i < watchlist.length; i++) {
        if (watchlist[i].name == "Inception") {
            string += "<a href=\"details/Inception.html\">"
        }

        else if (watchlist[i].name == "Avengers: Endgame") {
            string += "<a href=\"details/Avengers_Endgame.html\">"
        }

        else if (watchlist[i].name == "Black Mirror") {
            string += "<a href=\"details/Black Mirror.html\">"
        }

        else if (watchlist[i].name == "Breaking Bad") {
            string += "<a href=\"details/Breaking Bad.html\">"
        }
        
        else if (watchlist[i].name == "Joker") {
            string += "<a href=\"details/Joker.html\">"
        }
        
        else if (watchlist[i].name == "Jurassic Park") {
            string += "<a href=\"details/Jurassic Park.html\">"
        }
        
        else if (watchlist[i].name == "Sherlock") {
            string += "<a href=\"details/Sherlock.html\">"
        }
        
        else if (watchlist[i].name == "Split") {
            string += "<a href=\"details/Split.html\">"
        }
        
        else if (watchlist[i].name == "Stranger Things") {
            string += "<a href=\"details/Stranger Things.html\">"
        }
        
        else if (watchlist[i].name == "The Good Place") {
            string += "<a href=\"details/The Good Place.html\">"
        }
       
        string += watchlist[i].img;
        string += "</a>"
    }
    
    document.getElementById('column').innerHTML = string;
    