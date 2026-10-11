import { Heart, Sprout, ShoppingBasket } from 'lucide-react';

const values = [
  { icon: ShoppingBasket, title: 'Everyday essentials', text: 'A practical range of pantry staples and daily household favourites.' },
  { icon: Sprout, title: 'A thoughtful selection', text: 'A welcoming place to explore the ingredients that bring meals together.' },
  { icon: Heart, title: 'Neighbourhood spirit', text: 'A local provisions store, here to be part of the rhythm of everyday life.' },
];

export default function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="container about-layout">
        <div className="about-photo">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=85" alt="Fresh vegetables and grocery produce" loading="lazy" />
          <div className="about-photo-caption"><span>✳</span><span><strong>For everyday living</strong><small>Your neighbourhood provisions store</small></span></div>
        </div>
        <div className="about-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> A STORE FOR EVERYDAY LIFE</div>
          <h2>Your daily list,<br /><em>made a little easier.</em></h2>
          <p className="about-lead">Sri Mahalakshmi Provisions is your neighbourhood stop for the things that make daily life feel complete.</p>
          <p className="about-body">Explore our sample catalog to discover the range of everyday grocery and household essentials. We're building this page to make it easier to learn about the store and plan your next visit.</p>
          <div className="value-list">{values.map(({ icon: Icon, title, text }) => <div className="value-item" key={title}><span className="value-icon"><Icon size={19} /></span><span><b>{title}</b><small>{text}</small></span></div>)}</div>
        </div>
      </div>
    </section>
  );
}