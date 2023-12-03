document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu");
  let li = document.createElement("li");
  li.textContent = "Home";
  menu.insertBefore(li, menu.firstElementChild);

  let oldElement = document.getElementById("targetElement");
  let newElement = document.createElement("p");
  newElement.textContent = "This is the new element.";
  oldElement.after(newElement);
});
