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
            <div className="about-container-dark">
              <Navbar />
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                className="about-dark"
                alt="about dark"
              />
              <h1 className="about-heading-dark">About</h1>
            </div>
          ) : (
            <div className="about-container-light">
              <Navbar />
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                className="about-dark"
                alt="about dark"
              />
              <h1 className="about-heading-light">About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
