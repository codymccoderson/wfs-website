import React from 'react';
import styled from 'styled-components';
import wfslogo from '../../wfslogo.jpg';

const StyledBackground = styled.div`
`
const StyledContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    position: relative;
    top: 2.5rem;
`
const ImageWrapper = styled.div `
    position: relative; 
    bottom: 0.5rem;

        .theLogoImg {
            width: 45rem;
            height: 5rem;
        }
`

const StyledSubComponentTitle = styled.h1`
    position: relative; 
    bottom: 1rem;
    font-size: 2.8rem;
`

const StyledParagraphWrapper = styled.div`
    position: relative;
    bottom: 2rem;
    width: 62.5rem;
    text-align: left;
    
`
const StyledParagraph = styled.p`
    display: inline-block;
    font-size: 1.4rem;
    margin-bottom: 10px;
    
`

function UnfiledTaxReturns() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Unfiled Tax Returns
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor dolor, aliquam ut nibh vehicula, laoreet aliquet neque. Vestibulum nec faucibus mauris. Integer venenatis, sem sed ullamcorper volutpat, lectus nulla euismod elit, vel accumsan tellus orci sed nunc. Sed tempus eget ex at accumsan. Aenean eleifend iaculis sapien. Etiam aliquet augue efficitur, pulvinar metus sit amet, euismod turpis. Proin nec sollicitudin justo. Pellentesque ultrices pharetra enim, vehicula volutpat erat semper nec. Aenean posuere iaculis pharetra. Etiam at sapien accumsan, fringilla felis sit amet, luctus nisi. Etiam vel ullamcorper odio. Nunc tristique eget magna at faucibus. Praesent ut hendrerit arcu. Donec aliquet, lorem at interdum placerat, ante ligula blandit sem, in elementum tortor tortor nec ex. Integer semper justo in ante pharetra, sed interdum tortor facilisis. Integer congue ullamcorper nulla, feugiat porta quam interdum ut.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default UnfiledTaxReturns;