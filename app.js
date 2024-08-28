console.log("Hello World");

async function getData() {
  const resource = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await resource.json();
  //   console.log(data);
  return data;
}
getData();

function showJoke(jokeData) {
  // use console log to find the location of the data needed categories-value
  console.log(jokeData);
  const joke = document.getElementById("joke");
  joke.textContent = jokeData.value;
}

async function addJokes() {
  const theJokeData = await getData();
  showJoke(theJokeData);
}
addJokes();

document.getElementById("refreshPage").addEventListener("click", function () {
  window.location.reload();
});
