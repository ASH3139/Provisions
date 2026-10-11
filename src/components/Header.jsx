import { useState } from 'react';
import { Menu, X, MapPin, Leaf } from 'lucide-react';

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function goHomeAndScroll(id, closeMenu) {
  return (event) => {
    event.preventDefault();
    if (closeMenu) closeMenu();
    if ((window.location.hash || '#/') !== '#/') {
      window.location.hash = '#/';
      window.setTimeout(() => scrollToSection(id), 80);
    } else {
      scrollToSection(id);
    }
  };
}

export default function Header({ route }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const goProducts = (event) => {
    event.preventDefault();
    closeMenu();
    window.location.hash = '#/products';
  };

  return (
    <header className="site-header">
      <div className="topline"><span>Everyday essentials, close to home</span><span className="topline-location"><MapPin size={13} /> Vijayawada, Andhra Pradesh</span></div>
      <div className="nav-wrap container">
        <a className="brand" href="#/" aria-label="Sri Mahalakshmi Provisions home" onClick={(e) => { e.preventDefault(); closeMenu(); window.location.hash = '#/'; }}>
          <span className="brand-mark"><Leaf size={23} strokeWidth={1.8} /></span>
          <span className="brand-copy"><strong>Sri Mahalakshmi</strong><small>PROVISIONS</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#/" onClick={(e) => { e.preventDefault(); closeMenu(); window.location.hash = '#/'; }}>Home</a>
          <a href="#/products" onClick={goProducts} aria-current={route === 'products' ? 'page' : undefined}>Our products</a>
          <a href="#about" onClick={goHomeAndScroll('about', closeMenu)}>Our story</a>
          <a href="#visit" onClick={goHomeAndScroll('visit', closeMenu)}>Visit us</a>
          <a className="nav-cta" href="#visit" onClick={goHomeAndScroll('visit', closeMenu)}>Find our store <MapPin size={15} /></a>
        </nav>
      </div>
    </header>
  );
}
