function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <p>
        We'd love to hear from you. Reach out to us for volunteering,
        partnerships, or any questions.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;