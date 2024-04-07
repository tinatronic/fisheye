function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const photographerCard = document.createElement('article');
        const userPicture = document.createElement('img');
        userPicture.setAttribute("src", picture);
        userPicture.setAttribute("alt", name);
        const userName = document.createElement('h2');
        userName.textContent = name;
        const userLocation = document.createElement('p');
        userLocation.textContent = (`${city}, ${country}`);
        userLocation.setAttribute("class", "location");
        const userTagline = document.createElement('p');
        userTagline.textContent = tagline;
        userTagline.setAttribute("class", "tagline");
        const userPrice = document.createElement('p');
        userPrice.textContent = (`${price}€/jour`);
        userPrice.setAttribute("class", "price");

        photographerCard.appendChild(userPicture);
        photographerCard.appendChild(userName);
        photographerCard.appendChild(userLocation);
        photographerCard.appendChild(userTagline);
        photographerCard.appendChild(userPrice);

        return photographerCard;
    }
    return { data, getUserCardDOM }
}