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

function BankLevy() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Bank Levy
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo aliquet rhoncus. Nam mollis urna non mi feugiat molestie. Nunc vel sollicitudin justo. Duis cursus suscipit interdum. Donec nisi purus, commodo at quam nec, pretium tristique sem. Pellentesque vitae nisi vel diam mollis mattis eget vitae magna. Sed nec quam justo. Duis sollicitudin tristique ornare. Sed efficitur diam eget maximus fringilla. Praesent ut feugiat metus, at placerat purus. Ut quam mi, bibendum eu malesuada sed, molestie hendrerit libero. Aliquam feugiat, augue vitae placerat molestie, libero ligula venenatis quam, vel hendrerit ex neque vel magna. Suspendisse laoreet volutpat augue, ac aliquet risus fermentum id. Aliquam imperdiet dui vitae nulla pellentesque, in gravida mauris consequat.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default BankLevy;