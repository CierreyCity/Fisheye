let currentMedia = 0;
const lightboxContainer = document.getElementById("lightboxContainer");

function openLightbox(index) {
  const allMedias = document.getElementsByClassName("media-card");
  const type = allMedias[index].tagName;

  const src = allMedias[index].getAttribute("src");
  let fileName = src.split("/").pop().split(".")[0];
  fileName = fileName.replace(/_/g, " ");
}
