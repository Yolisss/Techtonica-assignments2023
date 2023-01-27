let button = document.querySelector("button");

let color = "pink";
button.addEventListener("click", () => {
  color.style.backgroundColor = "pink";
});

//DOM ON CHECKLIST
//let's create a list item and store in a variable
let newList = document.createElement("li");

//lets update the text content of that list item
newListItem.textContent = "Sirracha";

//Add that ul as list child
document.querySelector("ul").appendChild(newList);
