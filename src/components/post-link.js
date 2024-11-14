import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PostLink = ({ post }) => {
  const image = getImage(post.frontmatter.thumbnail);

  return (
    <article>
      {image && <GatsbyImage image={image} alt={post.frontmatter.title} />}
      <h2>{post.frontmatter.title}</h2>
      {/* ...rest of your code */}
    </article>
  );
};

export default PostLink;
