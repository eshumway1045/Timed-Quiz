var highscore = [];
var scoreWrapper = document.querySelector("#score-wrapper");

var loadScores = function() {
    var highscore = JSON.parse(localStorage.getItem("highscores"));
    highscore.sort(function(a,b){
        return -a.score + b.score;  
    });
    console.log(highscore);
    
    
    if (!highscore) {
        highscore = [];
        return false;
    };

    displayScores(highscore);
}



var displayScores = function(data) {
    var highscoresInfoEl = document.createElement("div");
            highscoresInfoEl.className = "score-list";
    var orderedList = document.createElement("ol")
        orderedList.className = "score";

    for (i = 0; i < data.length; i++) {
            var list = document.createElement("li");
            list.className = "score";
            list.innerHTML =  "Name: " + data[i].initials + " - Score: " + data[i].score;

            orderedList.appendChild(list);
            highscoresInfoEl.appendChild(orderedList);
            scoreWrapper.appendChild(highscoresInfoEl);


            
        };
}

loadScores();