import { Leaf, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const backToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = (event) => {
    event.preventDefault();
    window.location.hash = '#/';
  };

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#/" onClick={goHome}><span className="brand-mark"><Leaf size={22} /></span><span className="brand-copy"><strong>Sri Mahalakshmi</strong><small>PROVISIONS</small></span></a>
        <p>Everyday essentials.<br />A little closer to home.</p>
        <a className="footer-top" href="#top" onClick={backToTop}>Back to top <ArrowUpRight size={16} /></a>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Sri Mahalakshmi Provisions</span><span>Website preview · Sample catalog</span></div>
    </footer>
  );
}
