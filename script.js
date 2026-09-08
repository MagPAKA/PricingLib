/* ================= MENU MOBILE ================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");

const icon = menuToggle.querySelector("i");

if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
} else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
}

});

/* Fermer le menu après avoir cliqué sur un lien */

document.querySelectorAll("#nav-menu a").forEach(link => {

link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

});

});

/* ================= DARK MODE ================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

const icon = themeToggle.querySelector("i");

if (document.body.classList.contains("dark")) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    localStorage.setItem("theme", "dark");

} else {

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    localStorage.setItem("theme", "light");

}

});

/* Restaurer le thème choisi */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

document.body.classList.add("dark");

const icon = themeToggle.querySelector("i");

icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");

}

/* ================= ANNÉE FOOTER ================= */

document.getElementById("year").textContent =
new Date().getFullYear();

/* ================= ANIMATION AU SCROLL ================= */

const observer = new IntersectionObserver(
entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.12
}

);

document
.querySelectorAll(
".section-heading, .project-card, .skill-card, .timeline-item, .education-card"
)
.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});

/* Classe ajoutée lorsque l'élément devient visible */

const animationStyle = document.createElement("style");

animationStyle.textContent = `

.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

`;

document.head.appendChild(animationStyle);