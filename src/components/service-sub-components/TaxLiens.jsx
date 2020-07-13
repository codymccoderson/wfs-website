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

function TaxLiens() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Tax Liens
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta non orci sed tristique. Aliquam faucibus efficitur dolor accumsan vulputate. Praesent nec augue nec ante iaculis varius. Aliquam porta arcu sit amet nisi accumsan, sed laoreet dui hendrerit. Proin lobortis mi sed porta porttitor. Duis augue erat, condimentum eget tincidunt id, egestas in est. Donec ornare feugiat erat non sagittis. Suspendisse in tristique tellus, vitae pellentesque dui. Fusce maximus diam tortor, accumsan scelerisque massa eleifend ut. Duis pellentesque arcu eros, nec rhoncus tortor iaculis quis. Aenean sagittis, neque eget fermentum sodales, justo purus semper nulla, eu ultricies nisi tellus at nunc. Suspendisse tempor nisl non nisl imperdiet, sit amet commodo dui consectetur. Nunc rhoncus sit amet dui quis vehicula. Nulla lectus risus, rutrum a lacinia non, cursus vehicula diam. Donec porta ex eu lobortis volutpat. Aliquam ultricies posuere enim, nec bibendum neque imperdiet eget.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default TaxLiens;