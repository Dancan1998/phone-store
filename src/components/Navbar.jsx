import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Buttons";
class Navbar extends Component {
  render() {
    return (
      <Navwrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported); 
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>my cart</ButtonContainer>
        </Link>
      </Navwrapper>
    );
  }
}

export default Navbar;
const Navwrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    font-size: 1.3rem;
    color: var(--mainWhite) !important;
    text-transform: capitalize;
  }
`;
