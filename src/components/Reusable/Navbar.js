import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { FaCartArrowDown } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "navbar-collapse collapse",
    menus: [
      {
        id: 1,
        text: "Home",
        url: "/",
      },
      {
        id: 2,
        text: "About Us",
        url: "/about",
      },
      {
        id: 3,
        text: "Services",
        url: "/service",
      },
      {
        id: 4,
        text: "Contact Us",
        url: "/contact",
      },
    ],
  }

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "navbar-collapse collapse ",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "navbar-collapse collapse show text-center",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="logo" width="40px"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.myToggler}
        >
          <span className="text-white">Menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map(menu => {
              return (
                <li key={menu.id} className="nav-item">
                  <Link to={menu.url} className="nav-link text-white">
                    {menu.text}
                  </Link>
                </li>
              )
            })}

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon" />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
