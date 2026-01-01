function photographerTemplate(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  function getUserCardDOM() {
    const article = document.createElement("article");

    article.innerHTML = ` 
      <div class="card">
        <img src="assets/photographers/${portrait}" alt="photographer_picture" />
        <a href="../../photographer.html?id=${id}">
          <h2 class="photographer_name">${name}</h2>
        </a>
        <p class="photographer_location">${city}, ${country}</p>
        <p class="photographer_tagline">${tagline}</p>
        <span class="photographer_price">${price}€/jour</span>
      </div>`;

    return article;
  }

  return { getUserCardDOM };
}
