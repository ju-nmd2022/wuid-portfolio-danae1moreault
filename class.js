let inventory = document.getElementById("inventory");
let homework = document.getElementById("homework");
let userinput = document.getElementById("userinput");

homework.addEventListener("click", function () {
  homework.remove();
  buttonOnClick("stickynote.png");
  window.localStorage.setItem("gothomework", "true");
  document.getElementById("randomNumber").style.display = "flex";
});

userinput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    mathtest();
  }
});

window.onload = function () {
  var inventory = window.localStorage.getItem("inventory");
  var deletion = window.localStorage.getItem("gothomework");
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
    homework.remove();
  }
};
