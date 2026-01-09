function mediaTemplate(data) {
  const { photographerId, title, image, video, likes } = data;

  function getMediaCardDOM(index) {
    // Création du conteneur parent
    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("media-container");

    const article = document.createElement("article");
    const div = document.createElement("div");
    if (image) {
      article.innerHTML = `
        <img class="media-card" src="assets/images/${photographerId}/${image}" alt="${title}">

        
      `;
    } else {
      div.innerHTML = `
        <video class="media-card" src="assets/images/${photographerId}/${video}" controls></video>
      `;
      article.appendChild(div);
    }

    // Ajout de l'événement de clic pour ouvrir la Lightbox avec l'image ou la vidéo
    console.log(article);
    article.addEventListener("click", () => {
      console.log("test");
      openLightbox(index);
    });

    // Ajout de l'article au conteneur parent
    mediaContainer.appendChild(article);

    // Création d'une div pour les likes et le titre
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("media-info-container");

    // Création d'une div pour les likes
    const likeContainer = document.createElement("div");
    likeContainer.classList.add("media-like-container");
    likeContainer.innerHTML = `
      <span class="media-like-count">${likes}</span>
      <span class="material-symbols-outlined heart">favorite</span>
    `;

    // Ajout de l'événement de clic pour incrémenter les likes
    likeContainer.addEventListener("click", () => {
      toggleLikes(likeContainer.querySelector(".media-like-count"));
    });

    // Création d'une div pour le titre
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("media-card-title-container");

    // Ajout du titre
    const titleElement = document.createElement("h2");
    titleElement.classList.add("media-card-title");
    titleElement.textContent = title;

    // Ajout du titre à la div de titre
    titleContainer.appendChild(titleElement);

    // Ajout de la div de likes et de la div de titre à la div d'informations
    infoContainer.appendChild(likeContainer);
    infoContainer.appendChild(titleContainer);

    // Ajout de la div d'informations à la structure générale
    mediaContainer.appendChild(infoContainer);

    // Fonction pour incrémenter ou décrémenter les likes
    function toggleLikes(likeCountElement) {
      let currentLikes = parseInt(likeCountElement.textContent, 10);
      if (likeCountElement.classList.contains("liked")) {
        currentLikes--;
        likeCountElement.classList.remove("liked");
      } else {
        currentLikes++;
        likeCountElement.classList.add("liked");
      }
      likeCountElement.textContent = currentLikes;
      updateTotalLikes();
    }

    // Fonction pour mettre à jour le total des likes
    function updateTotalLikes() {
      const totalLikesElement = document.getElementById("totalLikes");
      const likeCounts = document.querySelectorAll(".media-like-count");
      let totalLikes = 0;
      likeCounts.forEach((likeCount) => {
        totalLikes += parseInt(likeCount.textContent, 10);
      });
      totalLikesElement.textContent = totalLikes;
    }

    return mediaContainer;
  }

  return { getMediaCardDOM };
}
