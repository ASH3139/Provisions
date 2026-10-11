import { ArrowDownRight, Leaf, Sprout, ShieldCheck } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> YOUR NEIGHBOURHOOD PROVISIONS STORE</div>
        <h1>Good food.<br /><em>Good days.</em><br />Every day.</h1>
        <p className="hero-description">The everyday essentials that make a house feel like home. Discover a thoughtfully selected range for your kitchen and your family.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#/products" onClick={onExplore}>Explore our range <ArrowDownRight size={17} /></a>
          <a className="text-link" href="#visit">Come say hello <span>↗</span></a>
        </div>
        <div className="hero-trust">
          <div><span className="trust-icon"><Sprout size={17} /></span><span><b>Everyday essentials</b><small>For your daily kitchen</small></span></div>
          <div><span className="trust-icon"><ShieldCheck size={17} /></span><span><b>Neighbourhood care</b><small>A familiar local store</small></span></div>
        </div>
      </div>
      <div className="hero-visual">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85" alt="Colourful fresh produce arranged at a grocery market" />
        <div className="hero-image-note"><span className="note-spark">✳</span><span><strong>From pantry basics</strong><small>to little daily favourites</small></span></div>
        <div className="hero-stamp"><span>GOODNESS</span><span>IN EVERY</span><span>GROCERY RUN</span><Leaf size={18} /></div>
      </div>
      <a className="scroll-cue" href="#products"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /></a>
    </section>
  );
}
