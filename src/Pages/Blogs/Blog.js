import React from "react";
import Banner from '../../components/Banner';
import { Helmet } from 'react-helmet-async';
const bannerImage = '/static/media/1400.5b998818e97ff18c5b37.jpg';
import { Link } from "react-router-dom";
import blogs from "./data";
import "./Blog.css";

const Blog = () => {
  return (
        <>
<Helmet>
  <title>ACP Sheets Blog | Aluminium Composite Panel Insights – Alutuff</title>

  <meta
    name="description"
    content="Read expert blogs on ACP sheets, aluminium composite panels, installation tips, benefits and architecture insights by Alutuff."
  />

  <link rel="canonical" href="https://alutuff.in/blog" />
  <meta name="robots" content="index, follow" />
</Helmet>


        {/*  */}
          <div className="w-100">
            <Banner image={bannerImage} heading="Our Blogs"/>
            <h1 className="seo-h1">
  ACP Sheets & Aluminium Composite Panels Blog
</h1>

<p className="seo-intro">
  Expert insights, installation guides, benefits and design ideas related to ACP sheets and aluminium composite panels.
</p>

          </div>

    <div className="blog-page">
  
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <span>{blog.date}</span>
             <h3>
  <Link style={{color:"#000000"}} to={`/blog/${blog.slug}`}>{blog.title}</Link>
</h3>
              <p>{blog.shortDesc}</p>

              <Link to={`/blog/${blog.slug}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;
