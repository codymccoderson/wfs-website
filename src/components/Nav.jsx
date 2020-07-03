import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: black;
    color: white;
    min-height: 10vh;
`;

const StyledUnorderedList = styled.ul`
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
`;

function Nav() {
    return (
      <StyledNavbar>
          <h3>
              Logo
          </h3>
          <StyledUnorderedList>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                    <li>Home</li>
                </Link>
                <Link to='/services' style={{ textDecoration: 'none', color: 'white' }}>
                    <li>Services</li>
                </Link>
                <Link to='/intake' style={{ textDecoration: 'none', color: 'white' }}>
                    <li>Intake Form</li>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none', color: 'white' }}>
                    <li>Contact Us</li>
                </Link>
                <Link to='/payment' style={{ textDecoration: 'none', color: 'white' }}>
                    <li>Payment</li>
                </Link>
          </StyledUnorderedList>
      </StyledNavbar>
    );
  }
  
  export default Nav;