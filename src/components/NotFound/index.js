import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="nav-home-container">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        className="lg-image-nf"
        alt="not found"
      />
      <h1 className="lost-text">Lost your way?</h1>
      <p className="lost-description-text">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
