const button = document.querySelector('#button')
const idbar = document.querySelector('#idInput')
const pwbar = document.querySelector('#passwordInput')
const bars = document.querySelectorAll('.input')

button.disabled = true;
// querySelectorAll returns NodeList 
// in order to use map, changed its return value to array
Array.from(bars).map(bar => bar.addEventListener("keyup", () => {
  const id = idbar.value
  const pw = pwbar.value

  if (id.includes('@') && pw.length > 5) {
    button.style.backgroundColor = "#0095F6"
    button.style.cursor = "pointer";
    button.disabled = false;
  } else {
    button.style.backgroundColor = "#C0DFFD"
    button.disabled = true;
    button.style.cursor = "default";
  }
}))

// instead of keycode 
if (window.event.code === "Enter") {
  success();
}

const success =() => {
  location.href = "http://localhost:8080/students/34th/bomi/main.html"
}