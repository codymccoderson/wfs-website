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

function WageGarnishment() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Wage Garnishment
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus tortor diam, gravida auctor sem laoreet ut. Maecenas suscipit nec urna nec sagittis. Cras in sem sit amet metus iaculis sodales. Nunc maximus, felis quis congue viverra, nunc libero volutpat est, id pretium dolor elit at magna. Aenean sit amet enim ipsum. Duis condimentum justo eu dolor porttitor semper. Donec eget justo sed libero ultrices eleifend quis ac diam. Praesent consectetur accumsan felis, vitae condimentum purus fermentum eu.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default WageGarnishment;