function homeTemplate(photographers) {
    const { name, id, city, country, tagline, price, portrait } = photographers;

    function getUserCardDOM() {
        const photographerCard = document.createElement('article');
        // const userLink = document.createElement('a');
        // userLink.setAttribute("href", `./photographer.html?id=${id}`);
        // userLink.setAttribute("title", `Lien vers la page de ${name}`);
        // const userPicture = document.createElement('img');
        // userPicture.setAttribute("src", picture);
        // userPicture.setAttribute("alt", name);
        // const userName = document.createElement('h2');
        // userName.textContent = name;
        // const userLocation = document.createElement('p');
        // userLocation.textContent = (`${city}, ${country}`);
        // userLocation.setAttribute("class", "location");
        // const userTagline = document.createElement('p');
        // userTagline.textContent = tagline;
        // userTagline.setAttribute("class", "tagline");
        // const userPrice = document.createElement('p');
        // userPrice.textContent = (`${price}€/jour`);
        // userPrice.setAttribute("class", "price");

        // photographerCard.appendChild(userLink);
        // userLink.appendChild(userPicture);
        // photographerCard.appendChild(userName);
        // photographerCard.appendChild(userLocation);
        // photographerCard.appendChild(userTagline);
        // photographerCard.appendChild(userPrice);

        photographerCard.innerHTML +=
            `<a href="./photographer.html?id=${id}" title="lien vers la page de ${name}">
                <img src="assets/photographers/${portrait}" alt="${name}">
             </a>
             <h2>${name}</h2>
             <p class="location">${city}, ${country}</p>
             <p class="tagline">${tagline}</p>
             <p class="price">${price}</p>`;

        return photographerCard;
    }

    function getUserHeaderDOM() {
        const photographerHeader = document.querySelector('.photograph-header');

        photographerHeader.innerHTML +=
            `<div>
                <h2>${name}</h2>
                <p>${city}, ${country}</p>
                <p>${tagline}</p>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img src="assets/photographers/${portrait}>`;
        
        return photographerHeader;
    }
    
    return { getUserCardDOM }
}