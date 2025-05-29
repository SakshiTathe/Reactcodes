import React from 'react'
import logo from './logo.svg';
import './card.css'

export const Csss = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
    return (
        <div>
        <nav className="navbar">
      <div className="navbar-logo">MySite</div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Services</a>
        <a href="#" className="nav-link">Contact</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
            <div className='card'>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <img src={logo} alt='react' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia iure illum vero?</p>
                    <button>45 RS.</button>
                </div>
            </div>
        </div>
    )
}
