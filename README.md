# Rashid Mushkani's Personal Website

<img width="1728" alt="Screenshot 2024-12-11 at 4 10 54 PM" src="https://github.com/user-attachments/assets/e7f6fac7-f0da-4ab6-a75f-ffe68210ccf5" />


## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

Welcome to **Rashid Mushkani's Personal Website**! This website serves as an online portfolio showcasing Rashid's academic and professional endeavors in AI and Urban Studies. Built with Gatsby.js, the site features sections for Work, Publications, Bio, and Contact, providing visitors with comprehensive insights into Rashid's research, achievements, and ways to connect.

## Features

- **Hero Section:** Displays Rashid's name, title, and affiliations with a background.
- **Work Section:** Showcases Rashid's projects and research work with thumbnails, titles, dates, and detailed descriptions.
- **Publications Section:** Lists publications with options to view abstracts and download PDFs.
- **Bio Section:** Provides a brief biography highlighting academic journey and expertise.
- **Contact Section:** Includes a contact form powered by Formspree, along with affiliations and social media links for easy connectivity.
- **Responsive Design:** Ensures optimal viewing experience across various devices and screen sizes.
- **Accessibility:** Incorporates best practices to make the website accessible to all users.

## Technologies Used

- **Gatsby.js:** A React-based open-source framework for creating blazing-fast websites and apps.
- **React:** A JavaScript library for building user interfaces.
- **GraphQL:** A query language for APIs, used here to fetch markdown data.
- **SCSS:** A preprocessor scripting language that is interpreted or compiled into CSS.
- **Netlify:** A platform for deploying and hosting static websites with continuous deployment.
- **Formspree:** A service to handle form submissions without needing a backend.
- **React Icons:** Provides popular icons as React components.
- **gatsby-plugin-webfonts:** Manages web fonts efficiently within Gatsby.

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- **Node.js:** Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **Gatsby CLI:** Install Gatsby CLI globally if you haven't already.

```bash
npm install -g gatsby-cli
```

### Clone the Repository

```bash
git clone https://github.com/rsdmu/rsdmu-website.git
cd rsdmu-website
```

### Install Dependencies

```bash
npm install
```

## Development

To start the development server and view the website locally:

```bash
gatsby develop
```

- **Access the Site:** Open your browser and navigate to `http://localhost:8000` to see the website in action.
- **GraphQL Playground:** Visit `http://localhost:8000/___graphql` to explore and test GraphQL queries.

## Deployment

The website is deployed on Netlify for seamless continuous deployment. Every push to the main branch triggers an automatic build and deployment.

### Steps to Deploy Manually

#### Build the Project:

```bash
gatsby build
```

#### Deploy to Netlify:

- **Option 1:** Drag and drop the `public` folder into Netlify's deploy interface.
- **Option 2:** Connect your Git repository to Netlify for automatic deployments.

### Netlify Configuration

Ensure that your `netlify.toml` file is correctly configured.


**Note:** Adjust the CSP as needed based on your project's requirements.

## Project Structure

Here's an overview of the project's folder structure:

```plaintext
rsdmu-website/
├── src/
│   ├── components/
│   │   ├── BioSection.js
│   │   ├── Layout.js
│   │   ├── PublicationSchema.js
│   │   ├── Seo.js
│   │   ├── WorkSchema.js
│   │   └── ...other components
│   ├── data/
│   │   ├── publications/
│   │   │   └── -publication-files.md
│   │   └── work/
│   │       └── -work-files.md
│   │   
│   ├── pages/
│   │   ├── index.js
│   │   └── ...other pages
│   └── styles/
│       └── index.scss
├── static/
├── gatsby-config.js
├── gatsby-browser.js
├── gatsby-node.js
├── package.json
├── netlify.toml
└── README.md
```

- `src/components/`: Reusable React components used across the website.
- `src/data/`: Markdown files for Work and Publications sections.
- `src/fonts/` & `static/fonts/`: Self-hosted font files.
- `src/pages/`: Gatsby pages, including the main `index.js`.
- `src/styles/`: SCSS files for styling.
- `static/`: Static assets served directly, such as fonts and images.
- `gatsby-config.js`: Configuration file for Gatsby plugins and site metadata.
- `netlify.toml`: Configuration file for Netlify deployments.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, posting a blog, using the website tempalte, please follow these guidelines:

### Fork the Repository

### Create a New Branch

```bash
git checkout -b feature/YourFeature
```

### Make Your Changes

### Commit Your Changes

```bash
git commit -m "Add some feature"
```

### Push to the Branch

```bash
git push origin feature/YourFeature
```

### Open a Pull Request

Please ensure your contributions align with the project's coding standards and include relevant documentation and tests where applicable.

## License

This project is licensed under the MIT License.

## Contact

Feel free to reach out through any of the following platforms:

- **Email:** rashid.mushkani@gmail.com
- **LinkedIn:** [linkedin.com/in/rashid-mushkani](https://linkedin.com/in/rashid-mushkani)
- **GitHub:** [github.com/rsdmu](https://github.com/rsdmu)
- **Instagram:** [instagram.com/rashid_mushkani](https://instagram.com/rashid_mushkani)

