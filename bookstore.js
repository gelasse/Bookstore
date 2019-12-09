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
let imageBouton = document.createElement("img");
var bookContainer = document.getElementById("card-container");
const tousLesLivres = () => {
  bookContainer.innerHTML = "";

  for (let i = 0; i < livres.length; i++) {
    if (livres[i].title.toLowerCase().includes(input())) {
      let flipCard = document.createElement("div");
      flipCard.setAttribute("class", "flip-card");
      let flipCardInner = document.createElement("div");
      flipCardInner.setAttribute("class", "flip-card-inner");
      let flipCardFront = document.createElement("div");
      flipCardFront.setAttribute("class", "flip-card-front");
      let imageFlipCardFront = document.createElement("img");
      imageFlipCardFront.setAttribute("src", livres[i].cover);
      imageFlipCardFront.setAttribute("title", livres[i].title);
      imageFlipCardFront.setAttribute("class", "image");
      let bouton = document.createElement("button");
      bouton.setAttribute("id", "myBtn");

      imageFlipCardFront.setAttribute("alt", livres[i].title);
      let title = document.createElement("h2");
      title.innerHTML = livres[i].title;
      let flipCardBack = document.createElement("div");

      flipCardBack.setAttribute("class", "flip-card-back");
      let description = document.createElement("p");
      description.innerHTML = livres[i].description;

      bouton.innerHTML = "More Info";

      flipCardBack.appendChild(description);
      flipCardBack.appendChild(title);
      flipCardBack.appendChild(bouton);

      bouton.addEventListener("click", function() {
        console.log(imageBouton);
        bookContainer.innerHTML = "";
        imageBouton.setAttribute("src", livres[i].cover);
        imageBouton.setAttribute("alt", livres[i].title);
        bookContainer.appendChild(imageBouton);
      });
      /*    let elt = document.getElementById("bouton");
      elt.addEventListener("click", function() {
        let imageBouton = document.createElement("img");
        imageBouton.setAttribute("src", livres[i].cover);
        imageBouton.setAttribute("alt", livres[i].title);
      }); */
      flipCardFront.appendChild(imageFlipCardFront);
      flipCardInner.appendChild(flipCardFront);
      flipCardInner.appendChild(flipCardBack);
      flipCard.appendChild(flipCardInner);
      bookContainer.appendChild(flipCard);
    }
  }
};

function input() {
  return (valeur = document.getElementById("formulaire").value).toLowerCase();
}

function getValeur() {
  //afficherUnLivre();
  tousLesLivres();
}

/*let myInput = document.getElementById("formulaire");
myInput.addEventListener("input", function(e) {
  var value = e.target.value;
  alert(value);
});*/
