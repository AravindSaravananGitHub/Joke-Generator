const btn = document.querySelector(".btn");
const joke = document.querySelector("#joke");
const apiURL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

btn.addEventListener("click", generateJoke);

async function generateJoke() {
  try {
    joke.style.color = "#30336b";
    joke.innerHTML = "Loading....";
    btn.innerText = "Generating....";
    const res = await fetch(apiURL);
    const data = await res.json();
    //console.log(data.joke);
    btn.innerText = "Generate Joke";
    joke.innerHTML = data.joke;
  } catch (err) {
    joke.style.color = "red";
    joke.innerHTML = "Bad Internet Connection Try Again.....";
    btn.innerText = "Try Again";
    console.log(err);
  }
}
