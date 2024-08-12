import backgroundPatternImg from "./images/Backgroundpattern.png"
export default function createContact() {
  const content = document.getElementById("content");
  content.style.backgroundImage = `url(${backgroundPatternImg})`;
  content.style.textAlign = "center";
  content.style.fontSize = "1.3rem";
  content.style.padding = "2rem";
  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.style.gap = "1rem";

  const headline = document.createElement("h1");
  headline.textContent = "About Us";
  content.appendChild(headline);

  const headlinedescription = document.createElement("p");
  headlinedescription.textContent = `Welcome to Remy's, a Parisian gem where the art of cooking shines. Inspired by the story of a determined rat chef, our restaurant offers a delightful dining experience with passion and creativity at its core.`;
  content.appendChild(headlinedescription);

  const storyTitle = document.createElement("h2");
  storyTitle.textContent = "Our Story";
  content.appendChild(storyTitle);

  const storyDesc = document.createElement("p");
  storyDesc.textContent = `Remy's started with a little rat’s big dreams in Paris. From humble beginnings, Remy proved anyone can cook. Today, we continue his legacy with a blend of traditional and modern French cuisine.`;
  content.appendChild(storyDesc);

  const philosophyTitle = document.createElement("h2");
  philosophyTitle.textContent = "Our Philosophy";
  content.appendChild(philosophyTitle);

  const philosophyDesc = document.createElement("p");
  philosophyDesc.textContent = `We believe great food brings people together. Cooking is an art, and we aim to create memorable experiences with our inventive French dishes.`;
  content.appendChild(philosophyDesc);

 
  const joinUsTitle = document.createElement("h2");
  joinUsTitle.textContent = "Join Us";
  content.appendChild(joinUsTitle);

  const joinUsDesc = document.createElement("p");
  joinUsDesc.textContent = `Join us for a culinary journey at Remy's. Share in our passion for great food and experience the magic of French cuisine. Bon appétit!`;
  content.appendChild(joinUsDesc);
}
