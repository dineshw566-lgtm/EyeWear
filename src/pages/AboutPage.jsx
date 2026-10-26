import { images } from "../data/products"
import { business, buildWhatsAppUrl } from "../data/config"
import usePageMeta from "../hooks/usePageMeta"
import logo from "../assets/logo.png"
import FoldText from "../components/FoldText"
import "./AboutPage.css"

/* ─── Brand logos shown in the boutique ──────────────────────────── */
const BRAND_LOGOS = [
  { name: "Silhouette", file: "silhouette-white.png" },
  { name: "Montblanc", file: "montblanc-white.png" },
  { name: "Emporio Armani", file: "emporio-armani-white.png" },
  { name: "Tom Ford", file: "tom-ford-white.png" },
  { name: "Oakley", file: "oakley-white.png" },
  { name: "Ray-Ban", file: "ray-ban.png" },
  { name: "Vogue Eyewear", file: "vogue-eyewear-white.png" },
  { name: "Hugo Boss", file: "boss-white.png" },
  { name: "Diesel", file: "diesel-eyewear-white.png" },
  { name: "Nike Vision", file: "nike-vision-light.png" },
  { name: "Carrera", file: "carrera.png" },
  { name: "Calvin Klein", file: "calvin-klein-white.png" },
  { name: "Tommy Hilfiger", file: "fossil-white.png" },
  { name: "Versace", file: "versace-white.png" },
  { name: "Dolce & Gabbana", file: "dolce-gabbana-white.png" },
  { name: "Persol", file: "persol-white.png" },
]

/* ─── Lens technology partners ───────────────────────────────────── */
const LENS_PARTNERS = [
  { name: "Zeiss", origin: "Germany", note: "Precision optics since 1846" },
  { name: "Essilor", origin: "France", note: "World's leading lens innovator" },
  {
    name: "Rodenstock",
    origin: "Germany",
    note: "Individual vision solutions",
  },
  { name: "Hoya", origin: "Japan", note: "Advanced Japanese lens technology" },
  { name: "Vision Rx", origin: "India", note: "Premium Rx manufacturing" },
]

/* ─── Services ───────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: "👁️",
    title: "Expert Eye Examinations",
    desc: "Comprehensive eye health checks by qualified optometrists using advanced diagnostic equipment.",
  },
  {
    icon: "🕶️",
    title: "Frame Consultation",
    desc: "Personalised styling advice to match your face shape, lifestyle and wardrobe — from our in-store specialists.",
  },
  {
    icon: "📐",
    title: "Precision Lens Fitting",
    desc: "Progressive, bifocal, anti-glare, photochromic and blue-light lenses fitted and dispensed in-store.",
  },
  {
    icon: "👓",
    title: "Contact Lens Clinic",
    desc: "Trial fittings, power assessments and advice on daily, monthly and speciality contact lenses.",
  },
  {
    icon: "✅",
    title: "100% Authentic Brands",
    desc: "Every frame and lens we stock is sourced directly from authorised brand distributors — zero counterfeits.",
  },
  {
    icon: "🔧",
    title: "After-Sales Care",
    desc: "Adjustments, cleanings, screw replacements and warranty support long after your purchase.",
  },
]

/* ─── Values ─────────────────────────────────────────────────────── */
const VALUES = [
  {
    num: "01",
    title: "Style as identity",
    desc: "We believe a frame is never just a frame — it is an extension of who you are. Every piece in our boutique is selected with that in mind.",
  },
  {
    num: "02",
    title: "Expertise without ego",
    desc: "Knowledge shared clearly, so every decision feels informed and comfortable — never pressured.",
  },
  {
    num: "03",
    title: "Vision care first",
    desc: "Fashion follows function. Our qualified optometrists ensure your prescription is precise before the styling conversation even begins.",
  },
]

export default function AboutPage() {
  usePageMeta(
    "Our Story | ViZHən Plus Optics",
    "Meet ViZHən Plus Optics — Tirupur's premier optical boutique blending luxury eyewear with expert vision care.",
  )

  const whatsappUrl = buildWhatsAppUrl(
    "Hello, I'd like to know more about ViZHen Plus Optics services.",
  )

  return (
    <div className="about-page">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <header className="about-hero">
        <img
          src={images.editorial.optical}
          alt="ViZHən Plus Optics boutique — premium eyewear in Tirupur"
        />
        <div className="about-hero__overlay">
          <p className="eyebrow">Our Story</p>
          <h1>
            <FoldText
              text={"Where vision meets\npersonal style."}
              trigger="mount"
              splitBy="char"
              hinge="top"
            />
          </h1>
          <p className="about-hero__sub">
            Tirupur's premier optical boutique — luxury frames, precision
            lenses, expert care.
          </p>
        </div>
      </header>

      {/* ── MANIFESTO ─────────────────────────────────────────── */}
      <section className="about-manifesto">
        <div className="about-manifesto__badge">
          <img src={logo} alt="ViZHən Plus Optics" />
        </div>
        <div className="about-manifesto__text">
          <p className="eyebrow">ViZHən Plus Optics · Tirupur</p>
          <h2>
            <FoldText
              text="Eyewear is more than vision correction. It is a true reflection of your style, personality and confidence."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
          <p>
            Founded as Tirupur's exclusive branded optical destination, we
            curate 100% authentic eyeglasses and sunglasses from the world's
            most respected luxury houses — and pair them with the finest German
            and Japanese lens technology available.
          </p>
        </div>
      </section>

      {/* ── EDITORIAL SPLIT ───────────────────────────────────── */}
      <section className="about-split">
        <div className="about-split__image">
          <img
            src={images.editorial.man}
            alt="Portrait in modern eyewear"
            loading="lazy"
          />
        </div>
        <div className="about-split__copy">
          <p className="eyebrow">Who we are</p>
          <h2>
            <FoldText
              text="A boutique built around you."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
          <p>
            ViZHən Plus Optics is not a chain. We are a single, carefully
            curated boutique in the heart of Tirupur, staffed by optometrists
            and style consultants who take the time to understand your
            prescription, your face and your life — before a single frame is
            placed on the display counter.
          </p>
          <p>
            With 50+ international brands under one roof and lens partners
            spanning Germany and Japan, we bring the world's best optical
            science directly to you. Every pair leaves our store precisely
            fitted, perfectly adjusted and backed by a full warranty.
          </p>
          <div className="about-split__stats">
            <div>
              <strong>50+</strong>
              <span>Luxury brands</span>
            </div>
            <div>
              <strong>5</strong>
              <span>Lens technology partners</span>
            </div>
            <div>
              <strong>9:30 AM</strong>
              <span>Open every day until 10 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="about-values">
        {VALUES.map((v) => (
          <article key={v.num} className="about-values__card">
            <span className="about-values__num">{v.num}</span>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </article>
        ))}
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="about-services">
        <div className="about-services__header">
          <p className="eyebrow">What we offer</p>
          <h2>
            <FoldText
              text="Everything your eyes deserve."
              trigger="scroll"
              splitBy="word"
              hinge="top"
            />
          </h2>
        </div>
        <div className="about-services__grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="about-services__item">
              <span className="about-services__icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── LENS PARTNERS ─────────────────────────────────────── */}
      <section className="about-lens">
        <div className="about-lens__header">
          <p className="eyebrow">Lens technology</p>
          <h2>German &amp; Japanese precision.</h2>
          <p>
            We partner exclusively with the world's most respected lens
            manufacturers so your vision correction is as advanced as your
            eyewear.
          </p>
        </div>
        <div className="about-lens__grid">
          {LENS_PARTNERS.map((lp) => (
            <div key={lp.name} className="about-lens__card">
              <strong>{lp.name}</strong>
              <span className="about-lens__origin">{lp.origin}</span>
              <p>{lp.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BRAND LOGOS ───────────────────────────────────────── */}
      <section className="about-brands">
        <div className="about-brands__header">
          <p className="eyebrow">Our collection</p>
          <h2>50+ world-class brands.</h2>
          <p>
            Every brand in our boutique is 100% authentic, sourced directly from
            authorised distributors.
          </p>
        </div>
        <div className="about-brands__logos">
          {BRAND_LOGOS.map((b) => (
            <div key={b.name} className="about-brands__logo-wrap">
              <img
                src={`/logos/processed/${b.file}`}
                alt={b.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────────── */}
      <section className="about-quote">
        <blockquote>
          "Eyewear is a reflection of your style,
          <br />
          your personality, your confidence."
        </blockquote>
        <cite>— ViZHən Plus Optics, Tirupur</cite>
      </section>

      {/* ── VISIT & CONTACT ───────────────────────────────────── */}
      <section className="about-contact">
        <div className="about-contact__info">
          <p className="eyebrow">Visit us</p>
          <h2>Find us in Tirupur.</h2>

          <div className="about-contact__detail">
            <span className="about-contact__label">📍 Address</span>
            <p>
              D.No. 268, Sri Nataraja Ginning Factory Compound,
              <br />
              Avinashi Road, Bungalow Stop Signal,
              <br />
              Tirupur – 641602, Tamil Nadu, India.
            </p>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="about-contact__map-link"
            >
              Get directions →
            </a>
          </div>

          <div className="about-contact__detail">
            <span className="about-contact__label">🕐 Store Hours</span>
            <p>Monday – Sunday</p>
            <p>
              <strong>9:30 AM – 10:00 PM</strong>
            </p>
          </div>

          <div className="about-contact__detail">
            <span className="about-contact__label">📞 Phone</span>
            <a href={`tel:${business.phone}`}>{business.phone}</a>
          </div>

          <div className="about-contact__detail">
            <span className="about-contact__label">✉️ Email</span>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>

          <div className="about-contact__social">
            <span className="about-contact__label">Follow us</span>
            <div className="about-contact__social-links">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-btn about-social-btn--ig"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-btn about-social-btn--fb"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-btn about-social-btn--wa"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="about-contact__map">
          <iframe
            title="ViZHən Plus Optics location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8!2d77.34!3d11.10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzAwLjAiTiA3N8KwMjAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* ── CTA FOOTER ────────────────────────────────────────── */}
      <section className="about-cta">
        <div className="about-cta__inner">
          <h2>Ready to find your perfect pair?</h2>
          <p>
            Visit our boutique in Tirupur any day of the week, from 9:30 AM to
            10:00 PM. Walk in or reach out on WhatsApp to check availability.
          </p>
          <div className="about-cta__actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta__btn about-cta__btn--primary"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${business.phone}`}
              className="about-cta__btn about-cta__btn--ghost"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
