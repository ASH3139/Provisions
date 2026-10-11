import { Clock3, MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';

const address = 'Dr.No:-11-62-126 Canal Road, Near Vinayak Temple Beside Gopisetty Mallaiah Oil Shop, Vijayawada, Andhra Pradesh - 520001';
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function VisitUs() {
  return (
    <section className="visit-section section-pad" id="visit">
      <div className="container">
        <div className="visit-card">
          <div className="visit-copy">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> RIGHT HERE IN YOUR NEIGHBOURHOOD</div>
            <h2>We'd love to<br /><em>see you in store.</em></h2>
            <p>Stop by Sri Mahalakshmi Provisions. Find our location below and plan a visit whenever it suits you.</p>
            <a className="button button-cream" href={mapsUrl} target="_blank" rel="noreferrer">Get directions <Navigation size={17} /></a>
          </div>
          <div className="visit-details">
            <div className="detail-row"><span className="detail-icon"><MapPin size={20} /></span><div><b>Find our store</b><p>{address}</p><a href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <ExternalLink size={13} /></a></div></div>
            <div className="detail-row"><span className="detail-icon"><Clock3 size={20} /></span><div><b>Opening hours</b><p>Monday – Sunday</p><small>10:00 AM – 9:30 PM</small></div></div>
            <div className="detail-row"><span className="detail-icon"><Phone size={20} /></span><div><b>Call the store</b><p><a href="tel:+919246229880">+91 92462 29880</a></p><p><a href="tel:+917989658880">+91 79896 58880</a></p></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}