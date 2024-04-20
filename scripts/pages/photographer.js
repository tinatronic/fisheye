import * as headerTemplate from "/templates/headerTemplate.js";

const url = new URLSearchParams(document.location.search);
const photographerID = parseInt(url.get("id"));
console.log(photographerID)

async function displayHeader(photographers) {
    const headerModel = headerTemplate(photographers);
    const photographerDOM = headerModel.getUserHeaderDOM();
    return photographerDOM;
}

async function init() {
    const { photographers } = await getData();
    displayHeader(photographers);
}

init();