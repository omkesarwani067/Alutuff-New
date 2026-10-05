import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import "./ProductPage.css";
import HomeProducts from '../components/HomeProducts';
import { FaCheck } from "react-icons/fa";
import Banner from '../components/Banner';
const bannerImage = '/static/media/1400.5b998818e97ff18c5b37.jpg';
import ProductPageData from "../ProductPageData";
import { Helmet } from 'react-helmet-async';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  


  const categories = ["All", ...ProductPageData.map(item => item.category)];
  const selectedCategoryData = ProductPageData.find(cat => cat.category === selectedCategory);

  const allProducts = ProductPageData.flatMap(cat =>
    cat.products.map(product => ({ ...product, category: cat.category }))
  );

  const productsToShow = selectedCategory === "All"
    ? allProducts
    : selectedCategoryData?.products.map(product => ({
        ...product,
        category: selectedCategory,
      })) || [];

  // Grab images from products of selected category (for flip)
  const flipImages = selectedCategoryData?.products.map(p => p.image) || [];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Alutuff ACP Sheets Product Range',
    url: 'https://alutuff.in/product',
    itemListElement: allProducts.slice(0, 100).map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name || product.title || `Alutuff Product ${index + 1}`,
      url: 'https://alutuff.in/product'
    }))
  };

  useEffect(() => {
    if (selectedCategory !== "All" && flipImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % flipImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [selectedCategory, flipImages]);

  return (
    <>
<Helmet>
<title>ACP Sheets Product Range | Aluminium Composite Panels by Alutuff</title>
<meta
  name="description"
  content="Explore Alutuff’s complete range of ACP sheets and aluminium composite panels for exterior, interior and architectural applications in multiple finishes and categories."
/>
 <link rel="canonical" href="https://alutuff.in/product" />
  <meta name="robots" content="index, follow" />
<script type="application/ld+json">{JSON.stringify(productSchema)}</script>
</Helmet>



      <div className='w-100'>
        <Banner
          image={bannerImage}
          heading="Our Products"
          subheading="Welcome to our website"
        />
      </div>
<h1 className="seo-h1">
  ACP Sheets & Aluminium Composite Panels
</h1>

<p className="seo-intro">
  Explore Alutuff’s complete range of ACP sheets designed for exterior cladding,
  interior applications and modern architectural projects.
</p>

      <Container fluid className="product-section-container">
        {/* Mobile Top Wrapper */}
   {/* === Mobile Top Wrapper === */}
<div className="mobile-top-wrapper">
  <div className="product-top-bar">
    <h4>Categories</h4>
    <div
      className="product-hamburger"
      onClick={() => setShowMobileSidebar(prev => !prev)}
    >
      ☰
    </div>
  </div>

  {/* Sidebar Drops Just Below This Wrapper */}
  <div className={`product-mobile-sidebar ${showMobileSidebar ? "show" : ""}`}>
    {categories.map((cat) => (
      <button
        key={cat}
        className={`product-category-button ${selectedCategory === cat ? 'product-active' : ''}`}
        onClick={() => {
          setSelectedCategory(cat);
          setCurrentImageIndex(0);
          setShowMobileSidebar(false);
        }}
      >
        {cat}
      </button>
    ))}
  </div>
</div>

        {/* Section Title */}
        <div className='d-flex justify-content-center align-items-center mt-5 mb-2'>
          <p className='page-heading'>OUR PRODUCTS</p>
        </div>

        <Container fluid className='product-section-content-div'>
          {/* Desktop Sidebar */}
          <div className="product-sidebar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`product-category-button ${selectedCategory === cat ? 'product-active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentImageIndex(0);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="product-content">
            <h3>{selectedCategory}</h3>

            {/* Grid View for All */}
            {selectedCategory === "All" && (
              <div className="product-grid">
               {productsToShow.map((product) => (
  <div
    className="product-card"
    key={`${product.category}-${product.id}`}
    onClick={() => {
      setSelectedCategory(product.category);
      setCurrentImageIndex(0);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to top
    }}
    style={{ cursor: "pointer" }}
  >
    <img className='product-img' loading='lazy' src={product.image} alt={product.title} />
    <h4>{product.title}</h4>
    <p>{product.description}</p>
  </div>
))}

              </div>
            )}

            {/* Product Detail Layout */}
            {selectedCategory !== "All" && selectedCategoryData && (
              <div className="product-detail-layout ">
                {/* Left Image with Flip Animation */}
                <div className="product-detail-image">
                  <div className="image-slider-overlay">
                    {flipImages.map((imgSrc, idx) => (
                      <img
                        key={idx}
                        src={imgSrc}
                        loading='lazy'
                    alt={`${selectedCategory} ACP sheet aluminium composite panel`}

                        className={`slider-image ${idx === currentImageIndex ? "active" : ""}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Detail Info */}
                <div className="product-detail-info">
                  <div className="detail-block">
                    <h5>Material/Core:</h5>
                    <p>{selectedCategoryData.details.material}</p>
                  </div>
                  <hr />
                  <div className="detail-block">
                    <h5>Category Type:</h5>
                    <p>{selectedCategoryData.details.categoryType}</p>
                  </div>
                  <hr />
                  <div className="detail-block">
                    <h5>Applications:</h5>
                    <ul>
                      {selectedCategoryData.details.applications.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <div className="detail-block">
                    <h5>Key Features:</h5>
                    <ul>
                      {selectedCategoryData.details.keyFeatures.map((feature, idx) => (
                        <li key={idx}>
                          {feature}
                          {/* <FaCheck style={{ color: "green", marginLeft: "12px" }} /> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Container>

      <HomeProducts />
    </>
  );
};

export default ProductPage;
