import AlmasCaviarImg from "./images/Almas caviar.jpg";
import backgroundPatternImg from "./images/Backgroundpattern.png";
import ChocolateSouffléImg from "./images/Chocolate Soufflé.jpg";
import ConfitdeCanardImg from "./images/Confit de Canard.jpg";
import CrèmeBrûléeImg from "./images/Crème Brûlée.jpg";
import EscargotBourguignonneImg from "./images/Escargot Bourguignonne.jpg";
import GreenBeansAlmondineImg from "./images/Green Beans Almondine.jpg";
import linguiniImg from "./images/linguini.jpeg";
import PommesFritesImg from "./images/Pommes Frites.jpg";
import RatatouilleGratinImg from "./images/Ratatouille Gratin.jpg";
import RatatouilleImg from "./images/Ratatouille.jpg";
import RoastedLambwithHerbsdeProvenceImg from "./images/Roasted Lamb with Herbs de Provence.jpg";
import TarteTatinImg from "./images/Tarte Tatin.jpg";
export default function createMenu() {
  const content = document.getElementById("content");
  content.style.textAlign = "center";
  content.style.backgroundImage = backgroundPatternImg;
  content.style.backgroundImage = "cover";

  const heading = document.createElement("h1");
  heading.textContent = "Remy's: A Culinary Adventure";
  heading.style.marginTop = "20px";
  content.appendChild(heading);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  content.appendChild(menuContainer);

  const sections = [
    { id: "appetizers", title: "Appetizers" },
    { id: "main-courses", title: "Main Courses" },
    { id: "sides", title: "Sides" },
    { id: "desserts", title: "Desserts" },
  ];

  sections.forEach((section) => {
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = section.title;
    sectionTitle.style.fontFamily = "Georgia, serif";
    sectionTitle.style.marginTop = "30px";
    menuContainer.appendChild(sectionTitle);

    const sectionDiv = document.createElement("div");
    sectionDiv.id = section.id;
    menuContainer.appendChild(sectionDiv);
  });
  const menuItems = [
    {
      name: "Remy's Ratatouille",
      description:
        "A classic Provençal dish featuring a medley of roasted summer vegetables, slow-cooked to perfection.",
      image: RatatouilleImg,
      section: "appetizers",
    },
    {
      name: "Linguini with White Truffles",
      description:
        "Delicate pasta tossed with a rich truffle cream sauce, a nod to Remy's love for fine dining.",
      image: linguiniImg,
      section: "appetizers",
    },
    {
      name: "Escargot Bourguignonne",
      description:
        "A French classic, these tender snails are bathed in a garlic and herb butter sauce.",
      image: EscargotBourguignonneImg,
      section: "appetizers",
    },
    {
      name: "Le Chef's Surprise",
      description:
        "A daily changing special inspired by the freshest ingredients, showcasing the chef's creativity.",
      image: AlmasCaviarImg,
      section: "main-courses",
    },
    {
      name: "Confit de Canard",
      description:
        "Crispy duck leg served with a sweet and tangy orange sauce, a nod to French culinary tradition.",
      image: ConfitdeCanardImg,
      section: "main-courses",
    },
    {
      name: "Roasted Lamb with Herbs de Provence",
      description:
        "Tender lamb slow-roasted with aromatic herbs, a true taste of the French countryside.",
      image: RoastedLambwithHerbsdeProvenceImg,
      section: "main-courses",
    },
    {
      name: "Pommes Frites",
      description:
        "Classic French fries, crispy on the outside, fluffy on the inside.",
      image: PommesFritesImg,
      section: "sides",
    },
    {
      name: "Ratatouille Gratin",
      description:
        "A hearty baked version of the classic dish, topped with a golden cheese crust.",
      image: RatatouilleGratinImg,
      section: "sides",
    },
    {
      name: "Green Beans Almondine",
      description:
        "A simple yet elegant side dish, featuring fresh green beans with toasted almonds.",
      image: GreenBeansAlmondineImg,
      section: "sides",
    },
    {
      name: "Tarte Tatin",
      description:
        "A caramelized upside-down apple tart, a French dessert classic.",
      image: TarteTatinImg,
      section: "desserts",
    },
    {
      name: "Crème Brûlée",
      description: "A rich custard topped with a caramelized sugar crust.",
      image: CrèmeBrûléeImg,
      section: "desserts",
    },
    {
      name: "Chocolate Soufflé",
      description:
        "A decadent dessert, light and airy with a molten chocolate center.",
      image: ChocolateSouffléImg,
      section: "desserts",
    },
  ];
  menuItems.forEach((item) => {
    Menu(item.name, item.description, item.image, item.section);
  });
  function Menu(name, description, image, menuSectionId) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.style.marginBottom = "20px";
    menuItem.style.position = "relative";
    menuItem.style.overflow = "hidden";

    const imageElement = document.createElement("img");
    imageElement.src = image;
    imageElement.alt = name;
    imageElement.style.width = "50%";
    imageElement.style.height = "400px";
    imageElement.style.objectFit = "cover";
    imageElement.style.borderRadius = "10px";
    imageElement.style.transition = "transform 0.3s ease-in-out";
    menuItem.appendChild(imageElement);

    const descriptionElement = document.createElement("div");
    descriptionElement.textContent = description;
    descriptionElement.style.position = "absolute";
    descriptionElement.style.bottom = "10%";
    descriptionElement.style.left = "25%";
    descriptionElement.style.width = "calc(50% - 20px)";
    descriptionElement.style.padding = "10px";
    descriptionElement.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    descriptionElement.style.color = "white";
    descriptionElement.style.fontSize = "14px";
    descriptionElement.style.borderRadius = "10px";
    descriptionElement.style.opacity = "0"; // Start with hidden description
    descriptionElement.style.transition = "opacity 0.3s ease-in-out"; // Transition effect

    menuItem.appendChild(descriptionElement);

    menuItem.addEventListener("mouseover", () => {
      imageElement.style.transform = "scale(1.05)";
      descriptionElement.style.opacity = "1"; // Show description on hover
    });

    menuItem.addEventListener("mouseout", () => {
      imageElement.style.transform = "scale(1)";
      descriptionElement.style.opacity = "0"; // Hide description when not hovering
    });

    const menuSection = document.getElementById(menuSectionId);
    menuSection.appendChild(menuItem);
  }
}
