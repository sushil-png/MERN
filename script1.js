console.log(document);

console.log(document.title);

console.log(document.body);

const title = document.getElementById("title");

console.log(title);

const info = document.getElementsByClassName("info");

console.log(info);

const cards = document.querySelectorAll(".card");

console.log(cards);

const firstCard = document.querySelector(".card");

console.log(firstCard);

const headings = document.querySelectorAll(".card h2");

console.log(headings);

for (const heading of headings) {
  console.log(heading);
}
