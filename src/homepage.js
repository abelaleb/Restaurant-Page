export default function createHomepage() {
  const content = document.getElementById("content");
  content.style.fontSize = "1.25rem";
  content.style.textAlign = "center";
  content.style.backgroundImage = 'url("../src/images/Backgroundpattern.png")';

  const headline = document.createElement("h1");
  headline.textContent = "Remy's";
  headline.style.fontSize = "5rem";

  const main = document.createElement("div");
  main.textContent = `Immerse yourself in a culinary masterpiece. Our restaurant is renowned for its exquisite cuisine and impeccable ambiance. Each dish is a labor of love, crafted with the finest ingredients and presented with artistic flair. 
Whether you're celebrating a special occasion or simply seeking a luxurious escape, our restaurant is the perfect destination.`;
  main.style.display = "flex";
  main.style.flexDirection = "column";
  main.style.justifyContent = "center";
  main.style.alignItems = "center";
  main.style.padding = ".5rem";
  main.style.gap = "1rem";

  const image = document.createElement("div");
  image.style.backgroundImage = 'url("../src/images/Ratatouille.jpg")';
  image.style.backgroundSize = "cover";
  image.style.backgroundPosition = "end";
  image.style.backgroundRepeat = "no-repeat";
  image.style.minHeight = "60vh";
  image.style.minWidth = "80vh";

  const description = document.createElement("p");
  description.textContent = `Av. Gustave Eiffel, 75007 Paris, France`;
  description.style.margin = ".5rem"


  main.append(image, description);

  content.append(headline, main);
}
