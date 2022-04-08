const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');

function darkMode() {
    toggleIcon.children[0].textContent = 'Dark';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
}

function lightMode() {
    toggleIcon.children[0].textContent = 'Light';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
}


// Swicth Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)


function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 && toggleIcon.children[0].textContent == 'Light') {
        document.getElementById("nav").style.background = "#ffffff";
        document.getElementById("nav").style.transition = "all 0.8s ease";
        document.getElementById("nav").style.transform = "translateY(-7px)";
        const parentElement = document.querySelector('#nav');
        let allChildren = parentElement.querySelectorAll(":scope > a");
        allChildren.forEach(item => item.classList.add("dark-nav"));
        document.getElementById("nav").style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
        document.getElementById("text-white").style.color = "#000000 !important";
        // document.querySelector(".toggle-text").style.color = "#222222";
        // document.querySelector(".fas").style.color = "#222222";
    } else if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 && toggleIcon.children[0].textContent == 'Dark') {
        document.getElementById("nav").style.background = "#0b0b0b";
        document.getElementById("nav").style.transition = "all 0.8s ease";
        document.getElementById("nav").style.transform = "translateY(-7px)";
        document.getElementById("nav").style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
    } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        document.getElementById("nav").style.background = "rgba(52, 58, 64, 0)";
        document.getElementById("nav").style.transform = "translateY(2px)";
        document.getElementById("text-white").style.color = "#ffffff";
        const parentElement = document.querySelector('#nav');
        let allChildren = parentElement.querySelectorAll(":scope > a");
        allChildren.forEach(item => item.classList.remove("dark-nav"));
        document.getElementById("nav").style.boxShadow = "none";
    }

    // if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 && toggleIcon.children[0].textContent == 'Dark'){
    //     document.getElementById("nav").style.background = "rgba(52, 58, 64, 1.0)";

    //     // document.querySelector(".toggle-text").style.color = "#ffffff";
    //     // document.querySelector(".fas").style.color = "#ffffff";
    // }
}


window.onscroll = function() { scrollFunction() };