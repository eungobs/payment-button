import React from 'react';
import './WudoUI.css';

function WudoUI() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <div className="navbar">
        {/* Logo Section */}
        <a href="#" className="logo">
          <img 
            src="https://www.pngfind.com/pngs/m/489-4896524_icon-of-seat-furniture-chair-icon-vector-hd.png" 
            alt="Chair Icon" 
            className="chair-icon" 
          /> 
          WUDO
        </a>

        {/* Navigation Links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#furniture">Furniture</a>
          <a href="#product">Product</a>
          <a href="#store">Store</a>
        </nav>

        {/* Icon Links */}
        <div className="icons">
          <a href="#search"><i className="fas fa-search"></i></a>
          <a href="#cart"><i className="fas fa-shopping-cart shopping-cart-icon"></i></a>
          <a href="#menu"><i className="fas fa-bars hamburger-menu-icon"></i></a>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="content">
        {/* Left Content Section */}
        <div className="content-left">
          <div className="image-section">
            {/* Main Image */}
            <a href="#main-image">
              <img 
                src="https://th.bing.com/th?id=OPHS.IenweISo2%2bIatQ474C474&w=592&h=550&o=5&dpr=1.1&pid=21.1" 
                alt="main-image" 
                className="main-image"
              />
            </a>

            {/* Rotate Line */}
            <a href="#rotate-line" className="rotate-line">
              <img 
                src="https://github.com/eungobs/E-commerce/blob/master/49-492739_circle-arrow-png%201%20(1).jpg?raw=true" 
                alt="rotate-line-image" 
              />
            </a>

            {/* Thumbnail Images */}
            <div className="thumbnail-images">
              <a href="#thumbnail1">
                <img 
                  src="https://github.com/eungobs/E-commerce/blob/master/Mauve%20Dark%20Professional%20Twitter%20Profile%20Picture%20(5).png?raw=true" 
                  alt="Chair thumbnail 1" 
                />
              </a>
              <a href="#thumbnail2">
                <img 
                  src="https://github.com/eungobs/E-commerce/blob/master/Mauve%20Dark%20Professional%20Twitter%20Profile%20Picture%20(4).png?raw=true" 
                  alt="Chair thumbnail 2" 
                />
              </a>
              <a href="#thumbnail3">
                <img 
                  src="https://github.com/eungobs/E-commerce/blob/master/Mauve%20Dark%20Professional%20Twitter%20Profile%20Picture%20(3).png?raw=true" 
                  alt="Chair thumbnail 3" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="content-right">
          <div className="details-section">
            {/* Product Details */}
            <p>PREMIUM CHAIRS</p>
            <h1>Drop type cushion chair</h1>
            <p className="star-icon">8/10.15 Reviews</p>

            {/* Color Circles */}
            <div className="circles">
              <a href="#light-grey" className="circle light-grey"></a>
              <a href="#navy-blue" className="circle navy-blue"></a>
            </div>

            {/* Description */}
            <p>Premium & comfortable memory foam with</p>
            <p>a strong structure built with teakwood,</p>
            <p>it feels amazing.</p>

            {/* Dimensions Section */}
            <div className="parent-container">
              <div className="dimensions-section">
                <div className="dimensions">
                  <div className="dimension">
                    <span className="label">HEIGHT</span>
                    <span className="value">52 cm</span>
                  </div>
                  <span className="divider">|</span>
                  <div className="dimension">
                    <span className="label">WIDTH</span>
                    <span className="value">43 cm</span>
                  </div>
                </div>
              </div>
              <a href="#view-inches" className="view-inches">view in inches</a>
            </div>

            {/* Price and Quantity */}
            <div className="actions">
              <span className="price-bold">$265.50</span>
              <div className="quantity-buttons">
                <button className="btn minus-btn">-</button>
                <span className="quantity">1</span>
                <button className="btn plus-btn">+</button>
              </div>
            </div>

            {/* Action Buttons */}
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
