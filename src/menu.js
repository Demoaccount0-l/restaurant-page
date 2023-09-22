
function createMenu(){
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuHeading = document.createElement("h3");
    menuHeading.textContent = "Menu Items";

    menu.appendChild(menuHeading);
    menu.appendChild(loadMenuItems())
    
    return menu;

}


function loadMenuItems(){
    const menuItems = [
        {
            item: "CHICKEN GOLDEN DELIGHT",
            itemimage: "../dist/images/chickengoldendelight.png",
            description: "Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!" 
        },
        {
            item: "NON VEG SUPREME",
            itemimage: "../dist/images/nonvegsupreme.png",
            description: "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers"
        },
        {
            item: "INDI CHICKEN TIKKA",
            itemimage: "../dist/images/indichickentikka.png",
            description: "The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo"
        },
        {
            item: "CREAMY TOMATO PASTA PIZZA ",
            itemimage: "../dist/images/creamytomatopastapizza.jpg",
            description: "Loaded with a delicious creamy tomato pasta topping , green capsicum, crunchy red and yellow bell peppers and black olives"
        },
        {
            item: "PEPPER BARBECUE & ONION",
            itemimage: "../dist/images/pepperbarbequeandonion.jpg",
            description: "Pepper Barbecue Chicken I Onion"
        },
        {
            item: "CHICKEN FIESTA",
            itemimage: "../dist/images/chickenfiesta.png",
            description: "Grilled Chicken Rashers I Peri-Peri Chicken I Onion I Capsicum"
        }
    ]

    const menuItemsDiv = document.createElement("div");
    menuItemsDiv.classList.add("menuItemsDiv");

    for(let i =0;i< menuItems.length; i++){
        const menuItem = document.createElement("div");
        menuItem.classList.add("menuItem");

        const itemImg = document.createElement("img");
        itemImg.src = menuItems[i].itemimage;
        itemImg.alt = "Food Image";

       const itemName = document.createElement("div");
       itemName.textContent = menuItems[i].item;

       const itemDescription = document.createElement("div");
       itemDescription.textContent = menuItems[i].description;

       menuItem.appendChild(itemImg);
       menuItem.appendChild(itemName);
       menuItem.appendChild(itemDescription);
       menuItemsDiv.appendChild(menuItem);
    }

    return menuItemsDiv;
}




function loadMenu(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());

}

export default loadMenu;