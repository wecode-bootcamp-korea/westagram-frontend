const thisIsButton = document.getElementsByClassName("btn-login")[0];
thisIsButton.addEventListener('click', function () {
    const idInput = document.getElementById('idInput').value;
    const pwInput = document.getElementById('pwInput').value;
    if($("#idInput").value() != '' && $("#pwInput").value() != ''){
     $("#activeButton").value("disabled", false);
    }
})

