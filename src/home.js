function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const chefimg = document.createElement("img");
    chefimg.src = "../dist/images/chefimage.jpeg";
    chefimg.alt = "Chef";

    home.appendChild(createParagraph("Best Pizza in your country"));
    home.appendChild(createParagraph("Made with passion since 2000."));
    home.appendChild(chefimg);
    home.appendChild(createParagraph("Order Online or Visit us!!"));
    return home;
}

function createParagraph(paraText){
    const ptag = document.createElement("p");
    ptag.textContent = paraText;

    return ptag;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}


export default loadHome;