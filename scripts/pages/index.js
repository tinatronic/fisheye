    // async function getPhotographers() {
    //     // const allData = (await fetch('../data/photographers.json')).json();
    //     // console.log(allData);
    //     // return allData;
    //     try {
    //         const res = await fetch('../data/photographers.json');
    //         const data = await res.json();
    //         return data;
    //         // const photographers = data.photographers;
    //         // console.log(photographers)
    //         // return photographers;
    //     } catch (err) {
    //         throw new Error("Error fetching data:", err);
    //     }
    // }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = homeTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getData();
        displayData(photographers);
    }
    
    init();