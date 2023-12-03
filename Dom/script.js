function clickMe() {
  document.write("Hi Enam How are you");
}
function clickMe1() {
  let date = document.getElementById("ID1");
  date.innerHTML = Date();
}
document.addEventListener("DOMContentLoaded", function () {
  //............................. Selecting elements start ...............................................
  // id
  //   let ID1 = document.getElementById("ID1");
  //   ID1.innerHTML = "hi ,ferdawus";
  //class
  //   let className = document.getElementsByClassName("className1")[0];
  //   className.innerHTML = "Hi Hablu Programmer";
  //attribute
  //   let attribute = document.getElementsByName("heading5")[0];
  // tag
  //   let tagName = document.getElementsByTagName("h5")[0];
  //   tagName.innerHTML = "heading 1 is changed";
  //query selector
  // let querySelector = document.querySelector("#ID1");
  // querySelector.innerHTML = "querySelector";
  // let querySelectorAll = document.querySelectorAll("h5")[0];
  // querySelectorAll.innerHTML = "querySelectorAll";
  // console.log(querySelectorAll);
  // let pNode = document.querySelector(".pNode");
  // console.log(pNode.parentNode);
  //............................. Selecting elements end ...............................................
  //............................. Traversing elements start ...............................................
  // let parentDiv = document.querySelector(".parentDiv");
  // console.log(parentDiv.firstElementChild);
  // console.log(parentDiv.lastElementChild);
  // console.log(parentDiv.childNodes[1].childNodes[0].data);
  // console.log(parentDiv.children);
  // let nextElement = document.querySelector(".current");
  // console.log(nextElement.nextElementSibling);
  // let previousElement = document.querySelector(".current");
  // console.log(previousElement.previousElementSibling);
  //............................. Traversing elements end ...............................................
  //............................. Manipulating elements end ...............................................
  // let div = document.createElement("div");
  // div.innerHTML = "<p>This is paragraph tag</p>";
  // div.id = "paragraphId";
  // div.className = "paragraphClass";
  // let text = document.createTextNode("Inner test into the div");
  // div.appendChild(text);
  // let h1 = document.createElement("h1");
  // h1.textContent = "Inner h1 tag text";
  // div.appendChild(h1);
  // document.body.appendChild(div);
  // .......................................example practice ....................................
  // let ul = document.createElement("ul");
  // ul.id = "menu";
  // let li1 = document.createElement("li");
  // li1.textContent = "Home";
  // ul.appendChild(li1);
  // let li2 = document.createElement("li");
  // li2.textContent = "About";
  // ul.appendChild(li2);
  // let li3 = document.createElement("li");
  // li3.textContent = "Contact";
  // ul.appendChild(li3);
  // document.body.appendChild(ul);
  // let script = document.createElement("script");
  // script.src = "demo.js";
  // document.body.appendChild(script);
  // ...............................................function create li and reuse appendChild()...........................................
  // let menu = document.querySelector("#menu");
  // console.log(menu);
  // function CreateMenu(name) {
  //   let li = document.createElement("li");
  //   li.textContent = name;
  //   return li;
  // }
  // menu.appendChild(CreateMenu("Home"));
  // menu.appendChild(CreateMenu("About"));
  // ........................................................the difference in textContent && innerText .................

  // let node = document.querySelector(".node");
  // console.log(node.textContent);
  // console.log(node.innerText);

  // let menu = document.querySelector("#menu");

  // menu.innerHTML = "<a>Click me</a>";
  // menu.textContent = "<a>Click me</a>";
  // console.log(menu.textContent);
  // console.log(menu.innerHTML);
  //----------------------------------------fragment------------------------------------------
  let menu = document.querySelector("#menu");
  let lang = ["js", "php", "go", "java", "python"];
  let fragment = document.createDocumentFragment();

  lang.forEach((language) => {
    let li = document.createElement("li");
    li.textContent = language;
    fragment.appendChild(li);
  });
  menu.appendChild(fragment);
});
