// Fonction pour récupérer l'ID du photographe à partir de l'URL
export async function getPhotographerIdFromURL() {
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const params = new URLSearchParams(url.search);
  return params.get("id");
}

export async function getMedias() {
  let medias = [];
  await fetch("data/photographers.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (value) {
      medias = value.media;
    })
    .catch(function (error) {
      console.log(error);
    });
  return { media: [...medias] };
}

export async function displayImages(medias) {
  const photographerIdFromUrl = await getPhotographerIdFromURL();
  const imageSection = document.getElementById("media_section");
  const filteredMedia = medias.filter(
    (obj) => obj.photographerId == photographerIdFromUrl,
  );
  filteredMedia.forEach((media) => {
    const mediaModel = mediaTemplate(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM(
      filteredMedia.indexOf(media),
    ); // Utiliser filteredMedia.indexOf(media) pour obtenir l'index
    imageSection.appendChild(mediaCardDOM);
  });
  updateTotalLikes();
}

// Fonction pour mettre à jour le total des likes
export async function updateTotalLikes() {
  const totalLikesElement = document.getElementById("totalLikes");
  let totalLikes = 0;

  // Sélectionner tous les éléments ayant la classe "media-like-count"
  const likeCounts = document.querySelectorAll(".media-like-count");

  // Utilisation d'une boucle for-of pour parcourir les éléments
  for (const likeCount of likeCounts) {
    // Ajouter les likes de chaque élément au total
    totalLikes += parseInt(likeCount.textContent);
  }

  console.log(likeCounts);

  // Mettre à jour le contenu HTML du total des likes
  totalLikesElement.textContent = totalLikes;
}
