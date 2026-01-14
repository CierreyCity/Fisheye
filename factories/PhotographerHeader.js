import getPhotographers from "../api/Api.js";

function photographerHeader(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const header = document.createElement("header");

  header.innerHTML = `
    <div class="photographer-card">
      <div class="media-card-info">
        <h2 class="photographer_name">${name}</h2>
        <p class="photographer_location">${city}, ${country}</p>
        <p class="photographer_tagline">${tagline}</p>
      </div>

      <div id="likesContainer">
        <div id="likesCount">
          <span id="totalLikes">0</span>  
          <span class="material-symbols-outlined heart">favorite</span> 
          <span class="price">${price}€/jour</span> <!-- Balise price ici -->
        </div>
      </div>

      <button class="contact_button" onclick="displayModal()">
        Contactez-moi
      </button>
      

      <div class="image-container">
        <img src="assets/photographers/${portrait}" alt="photographer_picture" />
        
      </div>

      
    </div>`;

  return header;
}

async function init() {
  // Récupère les données des photographes
  const { photographers } = await getPhotographers();

  // Obtenez l'ID du photographe à partir de l'URL
  const photographerIdFromUrl = getPhotographerIdFromURL();

  // Recherchez le photographe dans le tableau en fonction de l'ID
  const selectedPhotographer = photographers.find(
    (photographer) => photographer.id == photographerIdFromUrl
  );

  // Vérifiez si le photographe a été trouvé
  if (selectedPhotographer) {
    // Obtenez le conteneur dans lequel vous souhaitez insérer le contenu
    const photographersSection = document.querySelector(".photographer-header");

    // Utilisez la fonction photographerHeader pour créer le contenu pour le photographe sélectionné
    const photographerCardDOM = photographerHeader(selectedPhotographer);

    // Ajoutez le contenu généré par la fonction à votre conteneur
    photographersSection.appendChild(photographerCardDOM);

    // Ajouter le nom du photographe à la modal de contact
    const modalContent = document.querySelector("#photographerContainer");
    modalContent.innerHTML += `
    <div class="contact-header">
            <h2>Contactez-moi</h2>
          <img src="assets/icons/close.svg" onclick="closeModal()" />
          </div>
      <h2> ${selectedPhotographer.name}</h2>
      <!-- Autres éléments de la modal ici -->
    `;
  }
}

function getPhotographerIdFromURL() {
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const params = new URLSearchParams(url.search);
  return params.get("id");
}

init();
