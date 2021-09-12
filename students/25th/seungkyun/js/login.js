const id = document.getElementById('idfield');
const pw = document.getElementById('pwfield');
const submitButton = document.getElementById('submitButton');

document.addEventListener('keyup', function() {
    if (id.value != "" && pw.value != "") {
      submitButton.style.backgroundColor = "#0095F6";
      submitButton.disabled = false;
      submitButton.style.cursor = "pointer";
    } else {
      submitButton.style.backgroundColor = "#B2DFFC";
      submitButton.disabled = true;
      submitButton.style.cursor = "default";
    }
});
