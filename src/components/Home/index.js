// Write your code here
// Write your code here
import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {isDarkTheme ? (
            <div className="home-container-dark">
              <Navbar />
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                className="about-dark"
                alt="home"
              />
              <h1 className="home-heading-dark">Home</h1>
            </div>
          ) : (
            <div className="home-container-light">
              <Navbar />
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                className="about-dark"
                alt="home"
              />
              <h1 className="home-heading-light">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
