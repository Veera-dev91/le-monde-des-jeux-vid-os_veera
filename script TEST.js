// script.js
document.getElementById("menuButton").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    // Vérifier si le menu est actuellement visible ou non
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";  // Afficher le menu
    } else {
        menu.style.display = "none";  // Masquer le menu
    }
});
