import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="nav-home-container">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="sm-image"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="lg-image"
        alt="home"
      />
    </div>
  </div>
)

export default Home
