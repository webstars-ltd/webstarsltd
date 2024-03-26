import React from "react"
import { Link } from "gatsby"
import useDarkMode from "use-dark-mode"

import Logo from "../../assets/images/logo-new.png"
import LogoWhite from "../../assets/images/logo-white1.png"

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)
  const darkModeActual = useDarkMode(false)
  const [value, setValue] = React.useState(
    darkModeActual.value === undefined
      ? false
      : darkModeActual.value
      ? darkModeActual.value
      : true
  )

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
    window.scrollTo(0, 0)
  })

  React.useEffect(() => {
    if (window) {
      let dark = ""
      if (localStorage.getItem("darkMode") !== "undefined") {
        dark = JSON.parse(localStorage.getItem("darkMode"))
        setValue(dark)
      } else {
        localStorage.setItem("darkMode", JSON.stringify(value))
      }
    }
  }, [darkModeActual.value])

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/" onClick={toggleNavbar} className="navbar-brand">
              {value === true ? (
                <img src={LogoWhite} alt="logo" />
              ) : (
                <img src={Logo} alt="logo" />
              )}
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/projects"
                    className="nav-link"
                    activeClassName={"active"}
                  >
                    Projects
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link
                    to="/services"
                    className="nav-link"
                    activeClassName={"active"}
                  >
                    Products
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link
                    to="/insights"
                    className="nav-link"
                    activeClassName={"active"}
                  >
                    Insights
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link"
                    activeClassName={"active"}
                  >
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/team"
                    className="nav-link"
                    activeClassName={"active"}
                  >
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link"
                    activeClassName={"active"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
