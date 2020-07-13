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

function OfferInCompromise() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Offer In Compromise
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec condimentum urna. Aliquam in tempus est. Nam in odio nec purus ultricies ultrices dictum ac mauris. In mollis volutpat purus, eget commodo risus mollis nec. Aenean luctus pellentesque justo, quis fermentum turpis sodales et. Duis ac dolor tempus, dignissim nisi ultricies, pulvinar dolor. Suspendisse in lacinia velit, eget vestibulum est. Donec id quam et diam pharetra blandit. Donec volutpat libero a laoreet maximus. Donec vitae lorem egestas, fringilla quam at, fermentum ante. Ut viverra interdum lectus molestie placerat. Morbi eget enim tincidunt tellus semper tristique.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default OfferInCompromise;