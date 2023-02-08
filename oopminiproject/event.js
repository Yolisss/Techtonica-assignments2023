//1. create an Event class
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
  //number 12 from mini oop project
  //create a function that takes in two parameters
  //you do not need "function" in front of addAvailableTickets
  //because in call, a function comes without the word function
  //first param =ticket type, second = ticket price

  //I am stuck on 12. I was able to create the function within the Event
  //class however it is not displaying on my browswer
  //also, in my console, I am getting document is not defined
  addAvailableTickets(nameOfTicketType, priceOfTicketType) {
    let ticketInfo = new ticketInfo(nameOfTicketType, priceOfTicketType);
    this.availableTickets.push(ticketInfo);
    console.log(availableTickets);
  }
}

//2. create an OBJECTS and assign values to them

//THIS IS AN OBJECT
const eventObj1 = new Event("Rihanna", "Rated R");

//3. create few more objects with different values
//THESE TWO ARE ALSO OBJECTS
const eventObj2 = new Event("Mana", "Rayando El Sol");
const eventObj3 = new Event("Jonas Brothers", "Jonas Brothers Tour");

//4. create an empty Event array
const eventArray = new Array();
//5. push the OBJECTS into array
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);

//'DOMContentLoaded' prevents JS code from running before the document
//is finished loading (is ready)

//5. Now we need to write the code to iterate throught it

//'DOMContentLoaded' prevents JS code from running before the document
//is finished loading (is ready)

document.addEventListener("DOMContentLoaded", () => {
  //handler when the DOM is fully loaded
  let html = "";
  //iterating through the array using forEach
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}`;
  });
  //event is the target element
  //innerHTML is used to return the HTML code from js file
  //to the target element (event) of the HTML page
  document.querySelector("#event").innerHTML = html;
});

//after this, go to your html file, open project in browser
//browser should show
//Events:
//obj1 as list
//obj2 as list
//obj3 as list

//Next create a class TicketType that can store the name and price of a ticket
//type
class TicketType {
  constructor(ticketName, ticketPrice) {
    this.ticketName = ticketName;
    this.priceOfTicket = priceOfTicket;
  }
}

console.log(eventObj1.addAvailableTickets("human", 299));
console.log(eventObj1.addAvailableTickets("vampire", 99));
