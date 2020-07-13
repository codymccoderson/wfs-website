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

function FullRepresentation() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Full Representation
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor, mauris in suscipit pulvinar, nulla erat convallis eros, quis tincidunt dui felis eget massa. Pellentesque ut mauris id sem vestibulum fringilla ac sit amet est. Donec hendrerit sollicitudin pellentesque. Praesent suscipit nunc vel convallis venenatis. Nam sit amet libero quis risus fermentum convallis sit amet quis turpis. Proin ac massa tincidunt, dignissim nisl laoreet, venenatis enim. Aenean vitae velit nisi. Donec tempus iaculis est vel faucibus.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default FullRepresentation;