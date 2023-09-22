import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const heading = document.createElement("h2");
    heading.textContent = "Pizza House";
    heading.classList.add("heading");

    header.appendChild(heading);
    header.appendChild(createNav());


    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("navSection");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu",
        menuButton.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) return;
            setActiveButton(menuButton);
            loadMenu();
        });


    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("button-nav");
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button != this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}


function createMain() {
    const main = document.createElement("main");
    main.classList.add('main');
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    const footerdiv = document.createElement("div");
    footerdiv.textContent = "Copyright @2023 Likhitha Vakalapudi ";

    footer.classList.add("footer");

    footer.appendChild(footerdiv);

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

export default initializeWebsite;