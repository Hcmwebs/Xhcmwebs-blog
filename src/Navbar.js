const  Navbar = () => {
  return (
    <nav className="navbar">
      <h1>hcmwebs updates</h1>
      <div className="links">
        <a href="/">Home</a>
      <a href="/create" className="primaryButton">New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;