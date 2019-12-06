var livres = [];
const url = "https://api.myjson.com/bins/zyv02";
fetch(url, {
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
    livres = data.books;
    console.log(livres);

    tousLesLivres();
  });

const tousLesLivres = () => {
  let booksDiv = document.getElementById("flip-card-front");
  let booksDivArriere = document.getElementById("flip-card-back");

  for (let i = 0; i < livres.length; i++) {
    let createDivBootstrap = document.createElement("div");
    createDivBootstrap.setAttribute("class", "col-sm");
    let imageDiv = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", livres[i].cover);
    image.setAttribute("title", livres[i].title);
    image.setAttribute("alt", livres[i].title);
    imageDiv.appendChild(image);
    createDivBootstrap.appendChild(imageDiv);
    booksDiv.appendChild(createDivBootstrap);
  }
  for (let i = 0; i < livres.length; i++) {
    let createDivBootstrap = document.createElement("div");
    createDivBootstrap.setAttribute("class", "col-sm");
    let imageDiv = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", livres[i].detail);
    image.setAttribute("title", livres[i].title);
    image.setAttribute("alt", livres[i].title);
    imageDiv.appendChild(image);
    createDivBootstrap.appendChild(imageDiv);
    booksDivArriere.appendChild(createDivBootstrap);
  }
};
