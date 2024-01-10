const displaytitle = document.querySelector(".title h1");
const displayrealeseyear = document.querySelector(".release-year");
const displayposter = document.querySelector(".poster img");
const movie = document.querySelector(".search-box");
const displayGenre = document.querySelector(".genre");
const displaydirector = document.querySelector(".director");
const displayawards = document.querySelector(".awards");
const displayoverview = document.querySelector(".overview");
const dispback = document.querySelector("body");
const dispcountry = document.querySelector(".country");
const disprating = document.querySelector(".rating");

async function fetchmovie() {
  const mname = movie.value;
  if (mname == "") {
    displaytitle.innerHTML = " ";
    displayrealeseyear.innerHTML = "";
    displayposter.src = "";
    displayGenre.innerHTML = "";
    displaydirector.innerHTML = "";
    displayawards.innerHTML = "";
    displayoverview.innerHTML = "Search Bar Cannot Be Blank";
    dispcountry.innerHTML = "";
    disprating.innerHTML = "";

    displayposter.src =
      "https://github.com/RaZa077/Movie-Reviews-/blob/main/icons/search.png?raw=true";
  } else {
    try {
      const out = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=81bd7c1e&t=${mname}`
      );
      const datas = await out.json();
      if (datas.Error == "Movie not found!") {
        displaytitle.innerHTML = " ";
        displaytitle.innerHTML = " ";
        displayrealeseyear.innerHTML = "";
        displayposter.src = "";
        displayGenre.innerHTML = "";
        displaydirector.innerHTML = "";
        displayawards.innerHTML = "";
        displayoverview.innerHTML = "Enter a Valid Movie Name";
        dispcountry.innerHTML = "";
        disprating.innerHTML = "";
        displayposter.src =
          "https://github.com/RaZa077/Movie-Reviews-/blob/main/icons/notfound.png?raw=true";
      } else {
        console.log(datas);
        displaytitle.innerHTML = `${datas.Title}`;
        displayrealeseyear.innerHTML = `Released in ${datas.Released}`;
        displayposter.src = `${datas.Poster}`;
        displayGenre.innerHTML = `Genre: ${datas.Genre}`;
        displaydirector.innerHTML = `Director: ${datas.Director}`;
        displayawards.innerHTML = `Awards: ${datas.Awards}`;
        displayoverview.innerHTML = `${datas.Plot}`;
        dispcountry.innerHTML = `Country: ${datas.Country}`;
        disprating.innerHTML = `Rating By ${datas.Ratings[0].Source}: ${datas.Ratings[0].Value}`;
      }
    } catch {}
  }
}
