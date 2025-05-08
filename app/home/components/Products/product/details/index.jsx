'use client'

import{ useState } from 'react';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('S');

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="product-detail" style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      {/* Left Side - Images */}
      <div className="product-images" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {[1, 2, 3, 4].map((_, idx) => (
          <img
            key={idx}
            src="/images/plant-thumbnail.jpg"
            alt="Product thumbnail"
            style={{ width: 70, height: 70, border: idx === 1 ? '2px solid green' : '1px solid #ccc' }}
          />
        ))}
      </div>

      {/* Right Side - Details */}
      <div className="product-info" style={{ maxWidth: 600 }}>
        <h2>Barberton Daisy</h2>
        <p style={{ color: 'green', fontWeight: 'bold' }}>$119.00</p>
        <p><strong>Short Description:</strong></p>
        <p style={{ color: '#555' }}>
          The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
        </p>

        {/* Size options */}
        <div style={{ margin: '1rem 0' }}>
          <strong>Size:</strong>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                style={{
                  padding: '0.5rem 1rem',
                  border: size === s ? '2px solid green' : '1px solid #ccc',
                  background: size === s ? '#eaffea' : '#fff',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>

          <button style={{ background: 'green', color: '#fff', padding: '0.5rem 1rem' }}>
            BUY NOW
          </button>
          <button style={{ border: '1px solid green', padding: '0.5rem 1rem' }}>
            ADD TO CART
          </button>
          <button style={{ border: '1px solid green', padding: '0.5rem' }}>♡</button>
        </div>

        {/* Additional Info */}
        <div style={{ marginTop: '1rem' }}>
          <p>SKU: 1995751877966</p>
          <p>Categories: Potter Plants</p>
          <p>Tags: Home, Garden, Plants</p>
        </div>

        {/* Social Sharing */}
        <div style={{ marginTop: '1rem' }}>
          <p>Share this product:</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#"><i>Facebook</i></a>
            <a href="#"><i>Twitter</i></a>
            <a href="#"><i>LinkedIn</i></a>
            <a href="#"><i>Email</i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
