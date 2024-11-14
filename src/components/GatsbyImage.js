// src/components/YourImageComponent.js
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const YourImageComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "static/assets/image-3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(data.file);

  return <GatsbyImage image={image} alt="Description of image" />;
};

export default YourImageComponent;
