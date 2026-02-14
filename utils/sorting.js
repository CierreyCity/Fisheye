import { getMedias, displayImages } from "../pages/photographer.js";

// Fonction pour trier et afficher les images
async function sortAndDisplayImages() {
  const { media } = await getMedias();
  media.sort((a, b) => {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  });
  document.getElementById("media_section").innerHTML = "";
  displayImages(media);
}
