function headerTemplate(photographer) {
    const {name, city, country, tagline, portrait} = photographer;

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

    return { getUserHeaderDOM };
}