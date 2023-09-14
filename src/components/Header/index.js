import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const triggerButton = () => (
    <button
      className="menu-btn"
      type="button"
      data-testid="hamburgerIconButton"
    >
      <GiHamburgerMenu className="menu" />
    </button>
  )

  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup modal trigger={triggerButton} className="popup-content">
        {close => (
          <div>
            <div className="cross-icon-container">
              <button
                className="cross-btn"
                onClick={close}
                type="button"
                data-testid="closeButton"
              >
                <IoMdClose className="content-icon-cross" />
              </button>
            </div>
            <ul className="links-container">
              <li className="list-item">
                <Link to="/" className="link-container">
                  <div className="item-container">
                    <AiFillHome className="content-icon" />
                    <p className="content-text">Home</p>
                  </div>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" className="link-container">
                  <div className="item-container">
                    <BsInfoCircleFill className="content-icon" />
                    <p className="content-text">About</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </nav>
  )
}

export default Header
