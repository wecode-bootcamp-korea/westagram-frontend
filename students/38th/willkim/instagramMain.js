const comMent = document.getElementById("instaCom");
const logBtn = document.getElementById("replyBtn");
const ulPlace = document.getElementById("ulComm");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userID = document.createElement("span");

  userID.innerText = "w00jinkim ";

  const breakit = document.createElement("br");

  ulPlace.append(userID);
  ulPlace.append(comMent.value);
  ulPlace.append(breakit);

  comMent.value = "";
});
