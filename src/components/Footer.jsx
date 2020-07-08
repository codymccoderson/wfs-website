import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div `
    margin-top: 1rem;
    padding: 1rem;
    background-color: black;
    color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`

const Footer = () => (
  <StyledFooter>
    <p>
        White's Financial Services LLC 1301 Shiloh Road NW, Suite 630 Kennesaw, GA 30144
    </p>
  </StyledFooter>
);

export default Footer;