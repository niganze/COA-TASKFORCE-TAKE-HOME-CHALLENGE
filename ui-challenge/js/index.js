

// Array holding gallery data
const photoGalleryData = [
    {
        imgSrc: "./assets/fox.png",
        title: "FENNEC FOX",
        location: "India",
    },
    {
        imgSrc: "./assets/whale.png",
        title: "HUMPBACK WHALE",
        location: "south africa",
    },
    {
        imgSrc: "./assets/baboon.png",
        title: "COMMON,BROWN BABOON",
        location: "south africa"
    },
    {
        imgSrc: "./assets/deer.png",
        title: "SPOTTED DEER",
        location: "amazon",
    },
];

// Function to generate gallery cards
function generateGalleryCards() {
    const galleryGrid = document.querySelector(".gallery-grid");
    photoGalleryData.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
    <img src="${item.imgSrc}" alt="${item.title}" />
    <div class="overlay">
      <div class="details">
        <h1>${item.title.split(" ").join("<br>")}</h1>
        <small class="location">${item.location}</small>
        <p class="more-info"> <span> Know More </span> <i class="fa-solid fa-arrow-right-long"></i></p>
        
      </div>
    </div>
  `;

        galleryGrid.appendChild(card);
    });
}

// Call the function to generate gallery cards on page load
document.addEventListener("DOMContentLoaded", generateGalleryCards);
