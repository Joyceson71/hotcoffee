document.addEventListener("DOMContentLoaded", function () {
    const menuOpenBtn = document.getElementById("menu-open-button");
    const menuCloseBtn = document.getElementById("menu-close-button");
    const body = document.body;

    // Open menu
    menuOpenBtn.addEventListener("click", function () {
        body.classList.add("show-mobile-menu");
    });

    // Close menu
    menuCloseBtn.addEventListener("click", function () {
        body.classList.remove("show-mobile-menu");
    });

    // Optional: close menu when clicking a link
    document.querySelectorAll(".right-section a").forEach(link => {
        link.addEventListener("click", function () {
            body.classList.remove("show-mobile-menu");
        });
    });
});