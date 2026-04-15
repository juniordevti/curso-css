function toggleMenu() {
    const menu = document.querySelector(".menu") 
    if(menu.style.display != "none") {
        menu.style.display = "none"
    } else {
        menu.style.display = "flex"
    }
}