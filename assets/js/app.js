//1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.

const button = document.querySelector(".button");
button.addEventListener("click", function removeButton(event) {
  button.remove();
});

// function hideButton(el) {
//   button.classList.add("hide");
// }
// button.addEventListener("click", hideButton);
// ამ ფუნქციაზე რატო არ შვება? რას ვაკეთებ არასწორად?

//2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:
//https://picsum.photos/id/1/200/300  სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
const body = document.querySelector("body");
const divBlock = document.createElement("div");
divBlock.setAttribute("class", "js-image");
divBlock.innerHTML = `
    <img src="https://picsum.photos/id/1/200/300" alt="img"/>
        `;
body.appendChild(divBlock);

// 4.
// 4.1 ლექციაზე დაწერილ ფაილში => app.js ში ნახეთ characters  მასივი რომელიც შედგება 4 ობიექტისგან.
// 4.2.characters   მასივიდან.map ის საშულებით შექმენით html სტრინგი
// (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი
// მსგავსი(სტილები დაადეთ css ის საშუალებით).
// 4.3 ეს html სტრინგი ჩასვით ამ დივში: <div id="characters-list"></div>.
// 4.4 დიზაინში  character card ზე არის სურათი, house და სრული სახელი,
// თქვენ უნდა ჩასვათ image, house და first_name + last_name რომელიც არის მასივის ობიექტ ელემენტში.
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
    actor: "Daniel Radcliffe",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
    actor: "Emma Watson",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
    actor: "Rupert Grint",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
    actor: "Tom Felton",
  },
];
function renderCards(userArr) {
  const characterCard = userArr.map((el) => {
    return `<div class=character-card><img src="${el.image}"><div class=character-info><p>
      ${el.first_name} ${el.last_name}</p><p>House: ${el.house}</p></div></div> `;
  });
  return characterCard;
}
let charactersHTML = renderCards(characters).join("");
let userCardList = document.createElement("div");
const charactersLi = document.getElementById("characters-list");
charactersLi.innerHTML = charactersHTML;

// const secondDiv = document.createElement("div");
// secondDiv.setAttribute("class", "main-div");
// body.appendChild(secondDiv);
// secondDiv.appendChild(charactersLi);
