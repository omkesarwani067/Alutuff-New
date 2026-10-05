import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogs from "./data";
import "./BlogDetails.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <h2 style={{ textAlign: "center" }}>Blog Not Found</h2>;
  }

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>

        <meta
          name="description"
          content={blog.metaDescription}
        />

        <link
          rel="canonical"
          href={`https://alutuff.in/blog/${blog.slug}`}
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://alutuff.in/blog/${blog.slug}`} />
        <meta property="og:image" content={blog.image} />

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: blog.title,
          description: blog.metaDescription,
          datePublished: blog.date,
          image: blog.image?.startsWith('http') ? blog.image : `https://alutuff.in${blog.image}`,
          mainEntityOfPage: `https://alutuff.in/blog/${blog.slug}`,
          author: { '@type': 'Organization', name: 'Alutuff' },
          publisher: { '@type': 'Organization', name: 'Alutuff', logo: { '@type': 'ImageObject', url: 'https://alutuff.in/logo512.png' } }
        })}</script>
      </Helmet>

      <div className="blog-details">
        <img src={blog.image} alt={blog.title} />

        <div className="details-content">
          <h1 >{blog.title}</h1>
          <span className="date">{blog.date}</span>

          <div
            className="blog-text"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
