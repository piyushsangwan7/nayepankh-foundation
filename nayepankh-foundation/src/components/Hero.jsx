import hero from "../assets/Hero.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>
          Empowering Communities
          <br />
          Creating Opportunities
        </h1>

        <p>
          Join NayePankh Foundation in making a positive impact through
          education, social welfare and community development.
        </p>

        <div className="hero-buttons">
          <button>Become a Volunteer</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={hero} alt="Volunteer Work" />
      </div>

    </section>
  );
}

export default Hero;