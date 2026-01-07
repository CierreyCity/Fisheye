export default async function getPhotographers() {
  const photographers = await fetch("data/photographers.json").then(
    (response) => response.json()
  );

  return photographers;
}
