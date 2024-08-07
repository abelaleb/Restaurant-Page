function createHomepage() {
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  headline.textContent = "Remy's";

  const image = document.createElement("img");
  image.src = "src/Ratatouille.jpg";
  image.alt = "Ratatouille food";

  const description = document.createElement("p");
  description.textContent =
    "This is the best restaurant in town. Fine dining at it's finest.";
  content.append(headline, image, description);
}
export default createHomepage;
