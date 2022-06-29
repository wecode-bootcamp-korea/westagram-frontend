let userIcon = document.querySelector('.user-icon')
let userMenu = document.querySelector('.user-info')
let body = document.querySelector('main')

function closeMenu() {
    if(userMenu.style.display = "flex") {
        userMenu.style.display = "";
    }
}

userIcon.addEventListener('click', function(){
    if(userMenu.style.display !== "flex") {
        userMenu.style.display = "flex";        
    } else {
        userMenu.style.display = "";
    } 
})
body.addEventListener('click',closeMenu)