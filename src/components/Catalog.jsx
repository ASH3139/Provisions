import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, PackageOpen, ArrowRight } from 'lucide-react';
import { categories, products } from '../data/products';
import ProductCard from './ProductCard';

const PREVIEW_COUNT = 8;

export default function Catalog({ variant = 'full', onViewAll }) {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [search, setSearch] = useState('');
  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatches = activeCategory === 'All Products' || product.category === activeCategory;
      const searchMatches = !term || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(term);
      return categoryMatches && searchMatches;
    });
  }, [activeCategory, search]);

  if (variant === 'preview') {
    const featured = products.slice(0, PREVIEW_COUNT);
    return (
      <section className="catalog-section section-pad" id="products">
        <div className="container">
          <div className="section-heading catalog-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> A LITTLE SOMETHING FOR EVERY DAY</div><h2>Good things for<br /><em>your kitchen.</em></h2></div>
            <p>From everyday pantry staples to little favourites, here is a small taste of what you will find on our shelves.</p>
          </div>
          <div className="product-grid preview-grid">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          <div className="view-all-wrap">
            <a className="button button-dark" href="#/products" onClick={onViewAll}>View all products <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="catalog-section section-pad" id="products">
      <div className="container">
        <div className="section-heading catalog-heading">
          <div><div className="eyebrow"><span className="eyebrow-line" /> THE FULL SHELF</div><h2>Everything for<br /><em>your kitchen.</em></h2></div>
          <p>From everyday pantry staples to little favourites, explore everything that keeps your home running.</p>
        </div>
        <div className="catalog-toolbar">
          <div className="category-tabs" aria-label="Filter products by category">
            {categories.map((category) => <button key={category.name} className={activeCategory === category.name ? 'category-tab active' : 'category-tab'} onClick={() => setActiveCategory(category.name)}>{category.name}</button>)}
          </div>
          <label className="search-box">
            <Search size={18} />
            <input type="search" placeholder="Search the shelves..." value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search products" />
            <SlidersHorizontal size={16} className="search-filter-icon" />
          </label>
        </div>
        <div className="results-line"><span>{filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} to explore</span><span className="sample-note">DEMO CATALOG</span></div>
        {filteredProducts.length ? (
          <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        ) : (
          <div className="empty-state"><PackageOpen size={34} /><h3>No items found just yet</h3><p>Try another search or explore a different category.</p><button className="button button-dark" onClick={() => { setSearch(''); setActiveCategory('All Products'); }}>Clear filters</button></div>
        )}
        <div className="catalog-footnote"><span>*</span> Product range shown is an illustrative example for website preview. Please confirm availability in store.</div>
      </div>
    </section>
  );
}
