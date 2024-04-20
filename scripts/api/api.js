async function getData() {
    try {
        const res = await fetch('../data/photographers.json');
        const data = await res.json();

        return data;
    } catch (err) {
        throw new Error("Error fetching data:", err);
    }
}

async function getPhotographers() {
    try {
        const res = await fetch('../data/photographers.json');
        const data = await res.json();
        const photographers = data.photographers;

        return photographers;
    } catch (err) {
        throw new Error("Error fetching data:", err);
    }
}

async function getPhotographerByID(id) {
    try {
        const res = await fetch('../data/photographers.json');
        const data = await res.json();
        const photographerByID = data.photographers.find(dataPhotographer => dataPhotographer.id === id);
        
        return photographerByID;
    } catch (err) {
        throw new Error("Error fetching data:", err);
    }
}