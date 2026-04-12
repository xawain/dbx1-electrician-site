import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import dbx1Logo from "./assets/dbx1_logo.png";
import dawainPhoto from "./assets/dawain.png";
import kirkPhoto from "./assets/kirk.png";
import dungaPhoto from "./assets/dunga.png";
import fabianPhoto from "./assets/fabian.png";
import johnnyPhoto from "./assets/johnny.jpeg";
import stacyPhoto from "./assets/stacy.png";
import tafariPhoto from "./assets/tafari.png";

// ── EmailJS credentials ──────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create a service (e.g. Gmail) and note the Service ID
// 3. Create an email template and note the Template ID
// 4. Copy your Public Key from Account → API Keys
// Then replace the three placeholder strings below.
const EMAILJS_SERVICE_ID      = "service_ah9zzh5";
const EMAILJS_TEMPLATE_ID     = "template_8ks8dbm";
const EMAILJS_AUTOREPLY_ID    = "template_ill8bcp";
const EMAILJS_PUBLIC_KEY      = "9sk2BMDXpn8m4Ujmu";
// ─────────────────────────────────────────────────────────────────────────────

function BrandName() {
  return <>db<span className="brand-x">X</span>1</>;
}

function renderBrand(text) {
  return text.split("dbX1").reduce((acc, part, i) => {
    if (i === 0) return [part];
    return [...acc, <BrandName key={i} />, part];
  }, []);
}

export default function App() {
  const [dark, setDark] = useState(false);
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  async function handleQuoteSubmit(e) {
    e.preventDefault();
    setFormStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setFormStatus("success");
      formRef.current.reset();
    } catch {
      setFormStatus("error");
    }
  }

  const services = [
    {
      title: "Landlord EICR Certificates",
      description:
        "Electrical Installation Condition Reports for landlords, letting agents, and property managers across London.",
      icon: "⚡"
    },
    {
      title: "Inspection & Testing",
      description:
        "Professional inspection and testing for domestic and commercial electrical systems to help keep properties safe and compliant.",
      icon: "🔍"
    },
    {
      title: "New Installations",
      description:
        "Full and partial electrical installations for homes, flats, offices, shops, and other commercial spaces.",
      icon: "🔧"
    },
    {
      title: "Consumer Unit Upgrades",
      description:
        "Modern consumer unit and fuse board upgrades to improve safety, reliability, and compliance.",
      icon: "📦"
    },
    {
      title: "Fault Finding",
      description:
        "Fast diagnosis of electrical faults, tripping circuits, power loss, and intermittent electrical issues.",
      icon: "🚨"
    },
    {
      title: "Minor Works & Remedials",
      description:
        "Sockets, lighting, repairs, additions, and remedial works carried out professionally and neatly.",
      icon: "🛠️"
    }
  ];

  const team = [
    {
      name: "Dawain (Rasta)",
      role: "Qualified Electrician",
      bio: "Founder of dbX1 Electrician, delivering high-quality electrical services with a strong commitment to safety, precision, and dependable customer service across both domestic and commercial projects..",
      image: dawainPhoto
    },
    {
      name: "Kirk",
      role: "Qualified Electrician",
      bio: "Skilled electrician with experience across domestic and commercial projects, providing high-quality installations and dependable electrical services.",
      image: kirkPhoto
    },
    {
      name: "Dunga",
      role: "Qualified Electrician",
      bio: "Highly skilled in practical site work, fault diagnosis, inspection and testing, and electrical upgrades, delivering dependable solutions across a diverse range of residential and commercial properties.",
      image: dungaPhoto
    },
    {
      name: "Johnny",
      role: "Qualified Electrician",
      bio:  "Providing expert support across installations, inspection and testing, and remedial works, with a specialism in high-end electrical installations and bespoke design projects for dbX1 Electrician customers.",
      image: johnnyPhoto
    },
    {
      name: "Tafari",
      role: "Apprentice Electrician",
      bio: "Newly joined the dbX1 Electrician team, Tafari is an apprentice electrician learning the trade and gaining hands-on experience across domestic and commercial electrical work.",
      image: tafariPhoto
    },
    {
      name: "Fabian",
      role: "Sales & Communications",
      bio: "Fabian works closely with the dbX1 Electrician team on the soft side of operations — handling sales, client communications, and ensuring every customer has a smooth and professional experience from first contact to job completion.",
      image: fabianPhoto
    },
    {
      name: "Stacy",
      role: "Marketing Manager",
      bio: "Stacy leads all marketing activity for dbX1 Electrician, managing both online presence and local advertising to grow the brand and bring in new customers across London.",
      image: stacyPhoto
    },
    {
      name: "Dave (AI)",
      role: "AI Assistant & Online Operations",
      bio: "Dave is dbX1 Electrician's AI assistant, managing online communications, enquiries, and scheduling around the clock — ensuring no lead is missed and the team stays free to focus on the work.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect fill='%230A0A2E' width='300' height='300'/%3E%3Crect x='95' y='60' width='110' height='90' rx='18' fill='%2300CFFF' opacity='0.15'/%3E%3Crect x='105' y='70' width='90' height='70' rx='12' fill='%2300CFFF' opacity='0.3'/%3E%3Ccircle cx='135' cy='100' r='10' fill='%2300CFFF'/%3E%3Ccircle cx='165' cy='100' r='10' fill='%2300CFFF'/%3E%3Ccircle cx='135' cy='100' r='4' fill='%23fff'/%3E%3Ccircle cx='165' cy='100' r='4' fill='%23fff'/%3E%3Crect x='130' y='118' width='40' height='5' rx='3' fill='%2300CFFF' opacity='0.8'/%3E%3Crect x='148' y='150' width='4' height='20' fill='%2300CFFF' opacity='0.6'/%3E%3Cellipse cx='150' cy='200' rx='60' ry='55' fill='%23003A5C'/%3E%3Ccircle cx='110' cy='175' r='5' fill='%2300CFFF' opacity='0.7'/%3E%3Ccircle cx='190' cy='175' r='5' fill='%2300CFFF' opacity='0.7'/%3E%3Ctext x='150' y='210' text-anchor='middle' font-size='11' fill='%2300CFFF' opacity='0.9' font-family='monospace'%3EAI%3C%2Ftext%3E%3C%2Fsvg%3E"
    }
  ];

  const reviews = [
    {
      name: "London Landlord",
      stars: 5,
      text: "Very professional and easy to deal with. The EICR report was clear and the job was completed quickly."
    },
    {
      name: "Property Manager",
      stars: 5,
      text: "Reliable service for certificates and inspection work. Good communication throughout."
    },
    {
      name: "Homeowner",
      stars: 5,
      text: "Turned up on time, explained everything clearly, and carried out the work neatly."
    }
  ];

  return (
    <div>
      <header className="header">
        <div className="container nav">
          <a href="#" className="logo-link">
            <img src={dbx1Logo} alt="dbX1 Electrician" className="site-logo" />
            <span className="sublogo">Domestic &amp; Commercial Electrical Services</span>
          </a>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="tag">London, England Electrical Services</span>
            <h2>
              Electrician in London for EICR, Inspection & Testing, Domestic and
              Commercial Electrical Work
            </h2>
            <p>
              <BrandName /> Electrician helps landlords, homeowners, businesses, and
              letting agents with EICRs, electrical inspections, fault finding,
              remedial works, consumer unit upgrades, and new installations
              across London.
            </p>

            <div className="hero-buttons">
              <a className="btn btn-primary" href="#contact">
                Request a Quote
              </a>
              <a className="btn btn-secondary" href="tel:+4420335986058">
                Call 0203 359 86058
              </a>
              <a
                className="btn btn-secondary"
                href="mailto:info@dbx1sparky.co.uk"
              >
                Email Us
              </a>
              <a
                className="btn btn-secondary"
                href="https://wa.me/447884067740"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Quick Quote</h3>
            {formStatus === "success" ? (
              <div className="form-success">
                <p>Thanks! We'll be in touch shortly.</p>
                <button
                  className="btn btn-primary full"
                  onClick={() => setFormStatus("idle")}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="quote-form" ref={formRef} onSubmit={handleQuoteSubmit}>
                <input type="text"  name="from_name"  placeholder="Full name"     required />
                <input type="tel"   name="phone"       placeholder="Phone number"  required />
                <input type="email" name="from_email"  placeholder="Email address" required />
                <select name="service" required defaultValue="">
                  <option value="" disabled>Service needed</option>
                  <option>Landlord EICR</option>
                  <option>Inspection &amp; Testing</option>
                  <option>New Installation</option>
                  <option>Consumer Unit Upgrade</option>
                  <option>Fault Finding</option>
                  <option>Minor Works &amp; Remedials</option>
                </select>
                <textarea name="message" rows="4" placeholder="Tell us about the job" />
                {formStatus === "error" && (
                  <p className="form-error">Something went wrong — please try again or call us directly.</p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary full"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? "Sending…" : "Send Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="accreditations">
        <div className="container accred-inner">
          <div className="accred-badge">✅ NAPIT Registered</div>
          <div className="accred-badge">✅ Part P Certified</div>
          <div className="accred-badge">✅ ECS Card Holder</div>
          <div className="accred-badge">✅ 18th Edition Wiring Regulations</div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="section-label">Services</p>
          <h3>Electrical services for landlords, homes, and businesses</h3>
          <div className="grid three">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section alt">
        <div className="container two-col">
          <div>
            <p className="section-label">About</p>
            <h3>Qualified electricians with 25+ years of experience</h3>
            <p>
              <BrandName /> Electrician is a London-based electrical business delivering
              domestic and commercial electrical services. Our team of qualified
              electricians provides reliable workmanship, clear communication,
              and professional service for inspections, testing, installations,
              upgrades, and remedial works.
            </p>
          </div>

          <div className="card">
            <ul className="list">
              <li>Qualified electricians for domestic and commercial work</li>
              <li>25+ years of experience</li>
              <li>EICR, inspection & testing, and installations</li>
              <li>Serving landlords, homeowners, agents, and businesses</li>
              <li>Based in London, England</li>
              <li>Website: db<strong style={{color:'#22c55e'}}>X</strong>1sparky.co.uk</li>
              <li>Email: info@db<strong style={{color:'#22c55e'}}>X</strong>1sparky.co.uk</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="team" className="section">
        <div className="container">
          <p className="section-label">Team</p>
          <h3>Meet the <BrandName /> Electrician team</h3>
          <p className="section-intro">
            Add real team photos here so visitors can see who they are hiring
            and build trust before getting in touch.
          </p>
          <div className="grid four">
            {team.map((member) => (
              <div key={member.name} className="card team-card">
                <img src={member.image} alt={member.name} className="team-img" />
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
                <p>{renderBrand(member.bio)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section alt">
        <div className="container">
          <p className="section-label">Reviews</p>
          <h3>What customers say</h3>
          <div className="grid three">
            {reviews.map((review) => (
              <div key={review.name} className="card">
                <div className="stars" aria-label={`${review.stars} out of 5 stars`}>
                  {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
                </div>
                <p>"{review.text}"</p>
                <strong>{review.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <h3>Contact <BrandName /> Electrician</h3>
          <p>
            For EICRs, landlord electrical certificates, inspection and testing,
            fault finding, consumer unit upgrades, and new installations in
            London.
          </p>
          <div className="contact-box">
            <p><strong>Phone:</strong> <a href="tel:+4420335986058">0203 359 86058</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/447884067740" target="_blank" rel="noreferrer">07884 067740</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@dbx1sparky.co.uk">info@db<strong style={{color:'#22c55e'}}>X</strong>1sparky.co.uk</a></p>
            <p><strong>Website:</strong> <a href="https://www.dbx1sparky.co.uk">db<strong style={{color:'#22c55e'}}>X</strong>1sparky.co.uk</a></p>
            <p><strong>Location:</strong> London, England</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={dbx1Logo} alt="dbX1 Electrician" className="footer-logo" />
            <p>Domestic &amp; Commercial Electrical Services · London</p>
          </div>
          <nav className="footer-nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-contact">
            <a href="tel:+4420335986058">0203 359 86058</a>
            <a href="mailto:info@dbx1sparky.co.uk">info@db<strong style={{color:'#22c55e'}}>X</strong>1sparky.co.uk</a>
            <a href="https://wa.me/447884067740" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} <BrandName /> Electrician. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
