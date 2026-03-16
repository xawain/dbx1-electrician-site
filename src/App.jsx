import { useEffect, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  const services = [
    {
      title: "Landlord EICR Certificates",
      description:
        "Electrical Installation Condition Reports for landlords, letting agents, and property managers across London."
    },
    {
      title: "Inspection & Testing",
      description:
        "Professional inspection and testing for domestic and commercial electrical systems to help keep properties safe and compliant."
    },
    {
      title: "New Installations",
      description:
        "Full and partial electrical installations for homes, flats, offices, shops, and other commercial spaces."
    },
    {
      title: "Consumer Unit Upgrades",
      description:
        "Modern consumer unit and fuse board upgrades to improve safety, reliability, and compliance."
    },
    {
      title: "Fault Finding",
      description:
        "Fast diagnosis of electrical faults, tripping circuits, power loss, and intermittent electrical issues."
    },
    {
      title: "Minor Works & Remedials",
      description:
        "Sockets, lighting, repairs, additions, and remedial works carried out professionally and neatly."
    }
  ];

  const team = [
    {
      name: "Dawain (Rasta)",
      role: "CEO & Lead Electrician",
      bio: "Founder of DBX1 Electrician, leading the business with a strong focus on quality workmanship, safety, and reliable customer service across domestic and commercial electrical projects.",
      image: "https://via.placeholder.com/400x280?text=Dawain"
    },
    {
      name: "Kirk",
      role: "Qualified Electrician",
      bio: "Experienced electrician supporting domestic and commercial electrical work, including installations, inspections, and testing.",
      image: "https://via.placeholder.com/400x280?text=Kirk"
    },
    {
      name: "Dunga",
      role: "Qualified Electrician",
      bio: "Skilled in practical site work, fault finding, upgrades, and general electrical services for a wide range of properties.",
      image: "https://via.placeholder.com/400x280?text=Dunga"
    },
    {
      name: "Johnny",
      role: "Qualified Electrician",
      bio: "Delivers dependable support across inspections, installations, testing, and remedial works for DBX1 Electrician customers.",
      image: "https://via.placeholder.com/400x280?text=Johnny"
    }
  ];

  const reviews = [
    {
      name: "London Landlord",
      text: "Very professional and easy to deal with. The EICR report was clear and the job was completed quickly."
    },
    {
      name: "Property Manager",
      text: "Reliable service for certificates and inspection work. Good communication throughout."
    },
    {
      name: "Homeowner",
      text: "Turned up on time, explained everything clearly, and carried out the work neatly."
    }
  ];

  return (
    <div>
      <header className="header">
        <div className="container nav">
          <div>
            <h1 className="logo">DBX1 Electrician</h1>
            <p className="sublogo">Domestic & Commercial Electrical Services</p>
          </div>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
            <button className="theme-btn" onClick={() => setDark(!dark)}>
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
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
              DBX1 Electrician helps landlords, homeowners, businesses, and
              letting agents with EICRs, electrical inspections, fault finding,
              remedial works, consumer unit upgrades, and new installations
              across London.
            </p>

            <div className="hero-buttons">
              <a className="btn btn-primary" href="#contact">
                Request a Quote
              </a>
              <a
                className="btn btn-secondary"
                href="mailto:info@dbx1sparky.co.uk"
              >
                Email Us
              </a>
              <a
                className="btn btn-secondary"
                href="https://wa.me/447000000000"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Quick Quote</h3>
            <form className="quote-form">
              <input type="text" placeholder="Full name" />
              <input type="tel" placeholder="Phone number" />
              <input type="email" placeholder="Email address" />
              <select>
                <option>Service needed</option>
                <option>Landlord EICR</option>
                <option>Inspection & Testing</option>
                <option>New Installation</option>
                <option>Consumer Unit Upgrade</option>
                <option>Fault Finding</option>
                <option>Minor Works & Remedials</option>
              </select>
              <textarea rows="4" placeholder="Tell us about the job"></textarea>
              <button type="button" className="btn btn-primary full">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="section-label">Services</p>
          <h3>Electrical services for landlords, homes, and businesses</h3>
          <div className="grid three">
            {services.map((service) => (
              <div key={service.title} className="card">
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
              DBX1 Electrician is a London-based electrical business delivering
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
              <li>Website: DBX1Sparky.co.uk</li>
              <li>Email: info@dbx1sparky.co.uk</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="team" className="section">
        <div className="container">
          <p className="section-label">Team</p>
          <h3>Meet the DBX1 Electrician team</h3>
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
                <p>{member.bio}</p>
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
                <p>“{review.text}”</p>
                <strong>{review.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <h3>Contact DBX1 Electrician</h3>
          <p>
            For EICRs, landlord electrical certificates, inspection and testing,
            fault finding, consumer unit upgrades, and new installations in
            London.
          </p>
          <div className="contact-box">
            <p><strong>Email:</strong> info@dbx1sparky.co.uk</p>
            <p><strong>Website:</strong> DBX1Sparky.co.uk</p>
            <p><strong>Location:</strong> London, England</p>
            <p><strong>Team:</strong> Dawain (Rasta), Kirk, Dunga, Johnny</p>
          </div>
        </div>
      </section>
    </div>
  );
}
