function Navbar() {
  return (
    <nav className="navbar">
      <h2>NayePankh Foundation</h2>

      <ul>
        <li>Home</li>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;