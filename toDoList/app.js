let localStorageObject = JSON.parse(localStorage.getItem("todolist"));

var items = []; //items initialize

if (localStorageObject != null) {
  items = localStorageObject;
}

var list = document.querySelector("#list");

items.forEach(function (item) {
  createItem(item);
});

list.addEventListener("click", function (item) {
  //if current item have checked class  remove this class else haven't checked class , add this class
  if ((item.target.tagName = "li")) {
    item.target.classList.toggle("checked");
  }
});

function newElement() {
  var item = document.querySelector("#task").value;

  if (item === "") {
    // null or empty check for new value
    alertify.set("notifier", "position", "top-center");

    alertify.success("Listeye boş ekleme yapamazsınız !");

    return;
  }

  createItem(item);

  alertify.set("notifier", "position", "top-right");

  alertify.warning("Listeye Eklendi");

  localStorage.setItem("todolist", JSON.stringify(items));
}

function createItem(item) {
  //create a new li element with current item value
  var li = document.createElement("li");

  var t = document.createTextNode(item);

  li.className = "list-group-item";

  li.appendChild(t);

  list.appendChild(li);

  items.push(item);

  var span = document.createElement("span");

  var text = document.createTextNode("x");

  span.className = "close";

  span.appendChild(text);

  li.appendChild(span);

  span.onclick = function () {
    //hide element when click on the button (X)
    var li = this.parentElement;

    li.style.display = "none";
  };
}
