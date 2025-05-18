import { useState } from 'react';
import { Link } from 'react-scroll';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="home" smooth={true} duration={500} className="brand-logo">
            DocsGPT
          </Link>
        </div>

        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={500} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} className="nav-link">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 