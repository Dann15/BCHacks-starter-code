function giveJoke() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://jokeapi-v2.p.rapidapi.com/joke/Programming?blacklistFlags=nsfw,religious,racist&idRange=0-100&type=single",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
      "x-rapidapi-key": "742a01c578msh96f37a311821c40p14b984jsnff7a6cd45b59"
    }
  }
  var jokes = document.getElementById("jokes");

  $.ajax(settings).done(function (response) {
    console.log(response);
    jokes.innerHTML = response.joke;
  });
}
