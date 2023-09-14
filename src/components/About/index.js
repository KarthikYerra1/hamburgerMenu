import Header from '../Header'

import './index.css'

const About = () => (
  <div className="nav-home-container">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="sm-image"
        alt="about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="lg-image"
        alt="about"
      />
    </div>
  </div>
)

export default About
