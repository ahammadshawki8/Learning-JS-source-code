var newDiv = document.createElement("div");
var newParagraph = document.createElement("p");

newParagraph.textContent = "Hello World!";
newDiv.innerHTML = "<p>DOM Manipulation is fun!</p>";

newDiv.classList.add("new-div");
newDiv.className += " old-new-div";

newDiv.classList.remove("new-div");
newDiv.className.replace("/ old-new-div/, '' ");

newDiv.setAttribute("data-attr", "something");
newDiv.setAttribute("data-attr", "nothing");
newDiv.removeAttribute("class");

newDiv.style.backgroundColor = "#000";
newDiv.style.backgroundColor = "#333";
newDiv.style.backgroundColor = "";

var box1 = document.querySelector("#box1");
box1.insertAdjacentElement("afterbegin", newDiv);
box1.insertAdjacentElement("beforeend", newParagraph);

newDiv.style.backgroundColor = "#333";
newDiv.style.color = "#fff";

var box2 = document.querySelector("#box2");
box2.insertAdjacentElement("beforebegin", newDiv);
box2.insertAdjacentElement("afterend", newParagraph);

box1.appendChild(box2);
var target = document.querySelector("#box1 h4");
box1.insertBefore(box2, target);

newParagraph.previousSibling.remove();
box1.children[0].remove();
box1.removeChild(target);

document.querySelector("#box3").remove();