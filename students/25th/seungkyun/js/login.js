/*const idField = document.getElementById("idfield")
const pwField = document.getElementById("pwfield");
const loginButton = document.getElementById("submitButton");

document.addEventListener('focus', function(e) {
  if (idField.value !== "" && pwField.value !== "") {
    loginButton.style.backgroundColor = "#0095F6";
  }
})
 */
const id = document.getElementById('idfield');
const pw = document.getElementById('pwfield');
const submitButton = document.getElementById('submitButton');

document.addEventListener('keyup', function() {
    if (id.value != "" && pw.value != "") {
      submitButton.style.backgroundColor = "#0095F6";
    } else {
      submitButton.style.backgroundColor = "#B2DFFC";
    }
});
