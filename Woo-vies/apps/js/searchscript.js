//added links to posters
movies = [{'name':'Inception', 'year':2010, 'director': 'Christopher Nolan',
'desc':'Inception Description', 'on_watchlist':0, 'genre':'Sci-Fi', 
'poster':'../assets/posters/inception.jpg'},

{'name':"Avengers: Endgame", 'year':2019, 'director':'Anthony Russo and Joe Russo',
'desc':'Endgame description', 'on_watchlist':0, 'genre':'Action',
'poster':'../assets/posters/endgame.jpg'},

{'name':'Joker', 'year':2019, 'director':'Todd Phillips',
'desc':'Joker description', 'on_watchlist':0, 'genre':'Thriller',
'poster':'../assets/posters/joker.jpg'},

{'name':'Split', 'year':2016, 'director':'M. Night Shyamalan',
'desc':'Split description', 'on_watchlist':0, 'genre':'Thriller',
'poster':'../assets/posters/split.jpg'},

{'name':'Jurassic Park', 'year':1993, 'director':'Steven Spielberg',
'desc':'Jurassic Park description', 'on_watchlist':0, 'genre':'Sci-Fi', 
'poster':'../assets/posters/jurassic.jpg'}]


shows = [{'name':'Black Mirror', 'Available to stream at:':'', 'episodes':22,
'desc':'Black Mirror description', 'on_watchlist':0, 'genre':'Sci-Fi', 'seasons':5,
'poster':'../assets/posters/black_mirror.jpg'},

{'name':'The Good Place', 'Available to stream at:':'', 'episodes':53,
'desc':'The Good Place description', 'on_watchlist':0, 'genre':'Comedy', 'seasons':4,
'poster':'../assets/posters/good_place.jpg'},

{'name':'Breaking Bad', 'Available to stream at:':'', 'episodes':62,
'desc':'Breaking Bad description', 'on_watchlist':0, 'genre':'Drama', 'seasons':5,
'poster':'../assets/posters/breaking_bad.jpg'},

{'name':'Sherlock', 'Available to stream at:':'', 'episodes':13,
'desc':'Sherlock description', 'on_watchlist':0, 'genre':'Mystery', 'seasons':4,
'poster':'../assets/posters/sherlock.jpg'},

{'name':'Stranger Things', 'Available to stream at:':'', 'episodes':25,
'desc':'Stranger Things description', 'on_watchlist':0, 'genre':'Horror', 'seasons':3,
'poster':'../assets/posters/stranger_things.jpg'}]



function display() {
    //stop hiding results
    var results = document.getElementById('results');
    if (results.style.display == "none") {
        results.style.display = "block";
    }
    document.getElementById('form').innerHTML = "";
}


function search() {
    var resultsdiv = document.getElementById('results');
    var input = document.getElementById('search').value;
    //look through movies db
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].name == input) {
            string = "<a href=\"\">Back to Search</a> <br> <img src=" + movies[i].poster + ">";
            resultsdiv.innerHTML = string;
        }
    }

    //look through shows db
    for (var i = 0; i < shows.length; i++) {
        if (shows[i].name == input) {
            string = "<a href=\"\">Back to Search</a> <br> <img src=" + shows[i].poster + ">";
            resultsdiv.innerHTML = string;
        }
    }

    display();
}


function submit() {
    document.getElementById('submit').addEventListener('click', search, false);
}

window.addEventListener('load', submit, false);