var watchlist = 
[
        {name:"Inception", img:"<img src=\"../assets/posters/inception.jpg\">"},

        {name:"Avengers: Endgame", img:"<img src=\"../assets/posters/endgame.jpg\">"},

        {name:"Black Mirror", img:"<img src=\"../assets/posters/black_mirror.jpg\">"}
        
]

    string = "";
    for (var i = 0; i < watchlist.length; i++) {
        string += watchlist[i].img;
    }
    document.getElementById('column').innerHTML = string;