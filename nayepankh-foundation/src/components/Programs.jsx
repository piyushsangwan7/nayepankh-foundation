import edu from "../assets/edu.jpg";
import health from "../assets/health.jpg";
import community from "../assets/Community.jpg";

function Programs() {
  return (
    <section className="programs" id="programs">
      <h2>Our Programs</h2>

      <div className="program-grid">

        <div className="program-card">
          <img src={edu} alt="Education" />
          <h3>📚 Education</h3>
          <p>
            Supporting students with learning opportunities and resources.
          </p>
        </div>

        <div className="program-card">
          <img src={health} alt="Health" />
          <h3>❤️ Health & Welfare</h3>
          <p>
            Promoting health awareness and community well-being.
          </p>
        </div>

        <div className="program-card">
          <img src={community} alt="Community" />
          <h3>🤝 Community Support</h3>
          <p>
            Empowering communities through social initiatives and volunteering.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Programs;