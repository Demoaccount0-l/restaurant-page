function createContact(){
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactHeading = document.createElement("h3");
    contactHeading.textContent = "Contact Us";

    contact.appendChild(contactHeading);
    contact.appendChild(DisplayContactDetails("Mama Bear", "Chef", "9999999999", "totallyrealEmail@HotFake.com"));
    contact.appendChild(DisplayContactDetails("Papa Bear", "Manager", "8888888888", "PerfectrealEmail@HotFake.com"));
    

    return contact;
}

function DisplayContactDetails(person, designation, phoneno, email){
    const contactDetails = document.createElement("div");
    contactDetails.classList.add("contactDetails");

    const personDiv = document.createElement("p");
    personDiv.textContent = person;

    const designationDiv = document.createElement("p");
    designationDiv.textContent = designation;

    const phonenoDiv = document.createElement("p");
    phonenoDiv.textContent = phoneno;

    const emailDiv = document.createElement("p");
    emailDiv.textContent = email;


    contactDetails.appendChild(personDiv);
    contactDetails.appendChild(designationDiv);
    contactDetails.appendChild(phonenoDiv);
    contactDetails.appendChild(emailDiv);

    return contactDetails;
}

function loadContact(){
    const main = document.getElementById("main");
    //main.textContent = ''; ==> this does the same thins as while loop below.
    while (main.lastElementChild) {
        main.removeChild(main.lastElementChild);
    }

    main.appendChild(createContact());

}

export default loadContact;