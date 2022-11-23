let inventory = document.getElementById("inventory");
let hallPass = document.getElementById("hallPass");

hallPass.addEventListener("click", function () {
  hallPass.remove();
  buttonOnClick("hallPass.png");
  window.localStorage.setItem("gotpass", "true");
});

window.onload = function () {
  var inventory = window.localStorage.getItem("inventory");
  var deletion = window.localStorage.getItem("gotpass");
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
    hallPass.remove();
  }
};
