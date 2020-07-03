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
    color: white;
    text-decoration: none;
`;

function Nav() {
    return (
      <StyledNavbar>
          <h3>
              Logo
          </h3>
          <StyledUnorderedList>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/services'>
                    <li>Services</li>
                </Link>
                <Link to='/intake'>
                    <li>Intake Form</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact Us</li>
                </Link>
                <Link to='/payment'>
                    <li>Payment</li>
                </Link>
          </StyledUnorderedList>
      </StyledNavbar>
    );
  }
  
  export default Nav;