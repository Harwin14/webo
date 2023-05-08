// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// Toggle searchbox
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active"); 
    searchBox.focus();  
    e.preventDefault();
};

//Klik di luar element
const hb = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button ");

document.addEventListener("click", function (e) {
    if (!hb.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
    }
});
