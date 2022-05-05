function isEmpty() {
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;

    if (id != "" && password != ""){
        document.getElementById("btn").removeAttribute("disabled");
    }
}