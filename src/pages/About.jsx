import './About.css';

function About() {
  
  return (
    <div className="about-wrapper">
      <div className="about-card">
        <h1>About Morning Bites</h1>
        <p className="intro">
          <strong>Morning Bites</strong> is your favorite stop for fresh, desi, and delicious breakfast & snack items —
          from crispy samosas to mouthwatering kachoris, we bring authentic street flavors right to your plate!
        </p>

        <div className="section">
          <h2>🥘 Our Story</h2>
          <p>
            Started with a passion for food and flavors, Morning Bites brings you the best of Indian snacks using
            traditional recipes and fresh ingredients. Whether it’s morning hunger or evening cravings — we’ve got
            something for every bite!
          </p>
        </div>

        <div className="section">
          <h2>🔥 Our Specials</h2>
          <ul>
            <li>Masala Samosa with Chutney</li>
            <li>Khasta Kachori & Aloo Sabzi</li>
            <li>Stuffed Parathas with Curd</li>
            <li>Jalebi, Poha, Vada Pav & more!</li>
          </ul>
        </div>

        <div className="section">
          <h2>🌟 Why Choose Us?</h2>
          <ul>
            <li>Freshly made every morning</li>
            <li>Hygiene-first kitchen</li>
            <li>Affordable street-style flavors</li>
            <li>Quick delivery & quality taste</li>
          </ul>
        </div>

        <p className="thanks">Thanks for visiting Morning Bites. Taste. Tradition. Togetherness. ❤️</p>
      </div>
    </div>
  );
}

export default About;
