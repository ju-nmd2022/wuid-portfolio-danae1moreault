let inventory = document.getElementById("inventory");
let book = document.getElementById("book");
let classroom = document.getElementById("classroom");

book.addEventListener("click", function () {
  book.remove();
  buttonOnClick("book.png");
  window.localStorage.setItem("gotbook", "true");
});

classroom.addEventListener("click", function () {
  var gotbook = window.localStorage.getItem("gotbook");
  if (gotbook == "true") {
    window.location.href = "classroom.html";
  } else {
    alert("You shouldn't show up to class late and without your books");
  }
});

window.onload = function () {
  var inventory = window.localStorage.getItem("inventory");
  var deletion = window.localStorage.getItem("gotbook");
  if (inventory !== null) {
    var table = inventory.split(",");
    let inventoryDiv = document.getElementById("inventory");
    for (let i = 0; i < table.length; i++) {
      let image = document.createElement("img");
      image.src = table[i];
      inventoryDiv.append(image);
    }
  }
  if (deletion != null && deletion == "true") {
    book.remove();
  }
  var gotpass = window.localStorage.getItem("gotpass");
  if (gotpass == null) {
    book.remove();
  }
};
