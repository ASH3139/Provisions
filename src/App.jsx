import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';

function getRouteFromHash() {
  const hash = window.location.hash || '#/';
  return hash.startsWith('#/products') ? 'products' : 'home';
}

export default function App() {
  const [route, setRoute] = useState(() => getRouteFromHash());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goToProducts = useCallback((event) => {
    if (event) event.preventDefault();
    window.location.hash = '#/products';
  }, []);

  return (
    <>
      <Header route={route} />
      <main>
        {route === 'products' ? (
          <Catalog variant="full" />
        ) : (
          <>
            <Hero onExplore={goToProducts} />
            <div className="marquee-band" aria-label="Everyday grocery essentials"><div className="marquee-track"><span>GOOD FOOD, EVERY DAY ✳</span><span>YOUR PANTRY, YOUR WAY ✳</span><span>LOCAL STORE, EVERYDAY GOODNESS ✳</span><span>GOOD FOOD, EVERY DAY ✳</span></div></div>
            <Catalog variant="preview" onViewAll={goToProducts} />
            <About />
            <VisitUs />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
