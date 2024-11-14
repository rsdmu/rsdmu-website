// src/components/PostLink.js
import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostLink = ({ post }) => {
  const image = getImage(post.frontmatter.thumbnail)

  return (
    <article className="card">
      {image && (
        <Link to={post.fields.slug}>
          <GatsbyImage image={image} alt={`${post.frontmatter.title} - Featured Image`} />
        </Link>
      )}
      <header>
        <h2 className="post-title">
          <Link to={post.fields.slug} className="post-link">
            {post.frontmatter.title}
          </Link>
        </h2>
        <div className="post-meta">{post.frontmatter.date}</div>
      </header>
    </article>
  )
}

export default PostLink
