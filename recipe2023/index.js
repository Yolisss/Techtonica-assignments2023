let button = document.querySelector("button");

// let color = "pink";
// button.addEventListener("click", () => {
//   color.style.backgroundColor = "pink";
// });

//DOM ON CHECKLIST

// let fetch = document.getElementById(checklist);
// //let's create a list item and store in a variable
// let newList = document.createElement("li");

// //lets update the text content of that list item
// newListItem.textContent = "Sirracha";

// //Add that ul as list child
// document.querySelector("ul").appendChild(checklist);
const foodList = [
  "momos",
  "garlic",
  "green chillies",
  "spring onion",
  "light soy sauce",
  "sesame",
  "rice vinegar",
];

const myDiv = document.getElementById("checklist");

function check(array) {
  for (let i = 0; i < array.length; i++) {
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    //use when you submit a form inthe backend,
    //which form field do you want to get information from
    checkbox.name = "foodName";
    checkbox.value = array[i];
    //manolo(or any other name you'd like to call it) is like a prefix to the id
    //you can also write it as: checkbox.id = `checkbox-${i}`
    //this allows to give a unique id to each element instead of printing id each time
    //the element iterates through the loop
    checkbox.id = `checkout-${i}`;

    var label = document.createElement("label");

    //label needs to know what checkout is being tied to
    label.htmlFor = `checkout-${i}`;

    label.appendChild(document.createTextNode(array[i]));

    myDiv.appendChild(checkbox);
    myDiv.appendChild(label);
  }
}

check(foodList);
