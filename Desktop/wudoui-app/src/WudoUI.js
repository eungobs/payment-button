import React from 'react';
import './WudoUI.css';

/**
 * WudoUI Component
 * A furniture e-commerce product page component
 * @returns {JSX.Element} The rendered component
 */
function WudoUI() {
  return (
    <div className="App">
      {/* 
        Navbar Section
        Contains logo, navigation links, and action icons
      */}
      <div className="navbar">
        {/* Logo Section - Brand Identity */}
        <a href="/" className="logo" aria-label="WUDO Home">
          <img 
            src="https://www.pngfind.com/pngs/m/489-4896524_icon-of-seat-furniture-chair-icon-vector-hd.png" 
            alt="Chair Icon" 
            className="chair-icon" 
          /> 
          WUDO
        </a>

        {/* 
          Navigation Links
          Main site navigation menu
        */}
        <nav className="nav-links">
          <a href="/home" aria-label="Home">Home</a>
          <a href="/furniture" aria-label="Furniture">Furniture</a>
          <a href="/product" aria-label="Product">Product</a>
          <a href="/store" aria-label="Store">Store</a>
        </nav>

        {/* 
          Utility Icons
          Search, Cart, and Menu functionality
        */}
        <div className="icons">
          <button aria-label="Search" className="icon-button">
            <i className="fas fa-search"></i>
          </button>
          <button aria-label="Cart" className="icon-button">
            <i className="fas fa-shopping-cart shopping-cart-icon"></i>
          </button>
          <button aria-label="Menu" className="icon-button">
            <i className="fas fa-bars hamburger-menu-icon"></i>
          </button>
        </div>
      </div>

      {/* 
        Main Content Section
        Split into left (images) and right (product details) sections
      */}
      <div className="content">
        {/* 
          Left Content Section
          Product imagery and thumbnails
        */}
        <div className="content-left">
          <div className="image-section">
            {/* Main Product Image */}
            <a href="/main-image" aria-label="View Main Image">
              <img 
                src="https://th.bing.com/th?id=OPHS.IenweISo2%2bIatQ474C474&w=592&h=550&o=5&dpr=1.1&pid=21.1" 
                alt="main-image" 
                className="main-image"
              />
            </a>

            {/* 360-degree View Control */}
            <a href="/rotate-line" aria-label="Rotate Image" className="rotate-line">
              <img 
                src="https://github.com/eungobs/E-commerce/blob/master/49-492739_circle-arrow-png%201%20(1).jpg?raw=true" 
                alt="rotate-line-image" 
              />
            </a>

            {/* Product Thumbnail Gallery */}
            <div className="thumbnail-images">
              {/* Thumbnail Images - Different views of the product */}
              {/* ... thumbnail images ... */}
            </div>
          </div>
        </div>

        {/* 
          Right Content Section
          Product information and purchase options
        */}
        <div className="content-right">
          <div className="details-section">
            {/* Product Information */}
            <p>PREMIUM CHAIRS</p>
            <h1>Drop type cushion chair</h1>
            <p className="star-icon">8/10.15 Reviews</p>

            {/* Color Selection */}
            <div className="circles">
              <button aria-label="Select Light Grey" className="circle light-grey"></button>
              <button aria-label="Select Navy Blue" className="circle navy-blue"></button>
            </div>

            {/* Product Description */}
            <p>Premium & comfortable memory foam with</p>
            <p>a strong structure built with teakwood,</p>
            <p>it feels amazing.</p>

            {/* 
              Product Dimensions
              Displays height and width with unit toggle option
            */}
            <div className="parent-container">
              {/* ... dimensions content ... */}
            </div>

            {/* 
              Purchase Section
              Price display and quantity selection
            */}
            <div className="actions">
              <span className="price-bold">$265.50</span>
              <div className="quantity-buttons">
                <button className="btn minus-btn" aria-label="Decrease Quantity">-</button>
                <span className="quantity">1</span>
                <button className="btn plus-btn" aria-label="Increase Quantity">+</button>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="action-buttons">
              <button className="add-to-cart">Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer"></div>
    </div>
  );
}

export default WudoUI;