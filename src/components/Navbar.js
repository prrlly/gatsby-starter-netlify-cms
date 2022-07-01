import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }  

  handleScroll=(event)=>{
    let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
    let nav = document.getElementById("navbar");
    let logo = document.getElementById("logo");
    if(typeof window !== 'undefined' && window.innerWidth > 1023){
      if(scrollTop>80){
        nav.style.height = '70px'
        logo.style.height = '40px'
      }else{
        nav.style.height = '140px'
        logo.style.height = '52px'
      }
    }
}

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        id="navbar"
      >
        <div className="container navbar-content">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item navbar-logo" title="Logo">
              <img src={logo} id="logo" alt="Kaldi" style={{ width: "137px", height: "52px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <div className="navbar-line"></div>
              <Link className="navbar-item" to="/">
                About
              </Link>
              <div className="navbar-line"></div>

              <Link className="navbar-item" to="/portfolio">
                Portfolio
              </Link>
              <div className="navbar-line"></div>

              <Link className="navbar-item" to="/writing">
                Writing
              </Link>
              <div className="navbar-line"></div>

              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <div className="navbar-line"></div>

              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
