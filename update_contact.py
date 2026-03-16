from pathlib import Path
import re

app = Path("src/App.jsx")
text = app.read_text(encoding="utf-8")

text = text.replace(
    'href="https://wa.me/447000000000"',
    'href="https://wa.me/447884067740"'
)

pattern = re.compile(
    r'''<div className="hero-buttons">.*?</div>''',
    re.DOTALL
)

replacement = '''<div className="hero-buttons">
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
            </div>'''

new_text, count = pattern.subn(replacement, text, count=1)

if count == 0:
    raise SystemExit("Could not find hero-buttons block.")

new_text = new_text.replace(
    """<div className="contact-box">
            <p><strong>Email:</strong> info@dbx1sparky.co.uk</p>
            <p><strong>Website:</strong> DBX1Sparky.co.uk</p>
            <p><strong>Location:</strong> London, England</p>
            <p><strong>Team:</strong> Dawain (Rasta), Kirk, Dunga, Johnny</p>
          </div>""",
    """<div className="contact-box">
            <p><strong>Phone:</strong> 0203 359 86058</p>
            <p><strong>WhatsApp:</strong> 07884 067740</p>
            <p><strong>Email:</strong> info@dbx1sparky.co.uk</p>
            <p><strong>Website:</strong> DBX1Sparky.co.uk</p>
            <p><strong>Location:</strong> London, England</p>
            <p><strong>Team:</strong> Dawain (Rasta), Kirk, Dunga, Johnny</p>
          </div>"""
)

app.write_text(new_text, encoding="utf-8")
print("App.jsx updated successfully.")
