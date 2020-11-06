function display() {
    //stop hiding results
    var results = document.getElementById('results');
    if (results.style.display == "none") {
        results.style.display = "block";
    }
    document.getElementById('form').innerHTML = "";
}


function search() {
    var input = document.getElementById('search').value;
    input = input.toLowerCase();
    //result = search the json files for matches 
    display();
}


function submit() {
    document.getElementById('submit').addEventListener('click', search, false);
}

window.addEventListener('load', submit, false);