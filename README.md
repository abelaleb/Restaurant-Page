# Restaurant Website
# Overview
This project is a simple, responsive restaurant website themed after the fictional restaurant from the movie Ratatouille. The site is built using HTML, CSS, and Vanilla JavaScript, and it is bundled using Webpack. The website features a dynamic menu, interactive elements, and an aesthetically pleasing design, aimed to provide users with a delightful browsing experience.

# Features
Home Page: A welcoming landing page with a beautiful background, showcasing the restaurant's ambiance.
Menu: A dynamic menu displaying various dishes. Each dish is presented with an image, name, and description that appears on hover.
Responsive Design: The website is fully responsive and works well on different screen sizes, from mobile devices to desktops.
Webpack Bundling: The project uses Webpack to bundle and manage assets, ensuring optimized performance.
# Technologies Used
HTML5: Markup language to structure the content.
CSS3: Styling the website, making it visually appealing with animations and responsive layouts.
JavaScript (ES6): Adding interactivity and dynamic behavior to the website.
Webpack: Module bundler to compile and bundle JavaScript files along with other assets.
# Installation and Setup
To set up the project locally, follow these steps:

# Prerequisites
Ensure you have the following installed:
- Node.js
- npm

# Clone the Repository
git clone https://github.com/abelaleb/restaurant.git
cd restaurant

# Install Dependencies
npm install

# Run the Development Server
npm start

This will start a local development server, and you can view the website by navigating to http://localhost:8080/ in your browser.

# Build for Production
npm run build

This will generate the optimized files in the dist/ directory, ready for deployment.

# Project Structure
├── dist/                  # Compiled and minified files (production)
├── src/                   # Source files
│   ├── assets/            # Images, fonts, and other static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   ├── index.html         # Main HTML file
│   └── menuData.js        # JavaScript file containing menu data
├── .gitignore             # Files to be ignored by Git
├── package.json           # Project metadata and dependencies
├── webpack.config.js      # Webpack configuration file
└── README.md              # Project documentation (this file)

# Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue if you find any bugs or have suggestions for new features.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgments
Inspired by the movie Ratatouille by Pixar.
Thanks to Webpack for making asset bundling easier.
