export default function ProductCard({ product }) {
  const imageUrl = `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80`;
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={imageUrl} alt={product.name} loading="lazy" onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=75'; }} />
        {product.tag && <span className="product-tag">{product.tag}</span>}
      </div>
      <div className="product-details">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </article>
  );
}