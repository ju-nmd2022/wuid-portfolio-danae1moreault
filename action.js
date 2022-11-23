function buttonOnClick(url) {
  let inventoryDiv = document.getElementById("inventory");
  let image = document.createElement("img");
  image.src = url;
  inventoryDiv.append(image);
  let storage = window.localStorage.getItem("inventory");

  if (storage === null) {
    window.localStorage.setItem("inventory", [url]);
  } else {
    let newStorage = storage.concat("," + url);
    window.localStorage.setItem("inventory", newStorage);
  }
}
function mathtest() {
  let userinput = document.getElementById("userinput");
  let randomNumber = Math.floor(Math.random() * 2) + 1;
  console.log(userinput);
  console.log(randomNumber);
  if (userinput.value == randomNumber) {
    alert("Congrats, You got to class in time");
  } else {
    alert("Try again");
  }
}
