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

function InstallmentAgreement() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Installment Agreement
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia, urna a maximus molestie, ligula felis dignissim elit, in finibus nunc odio et dui. Vivamus rhoncus ante sed lectus tempor, sed rutrum risus bibendum. Sed at venenatis velit. Nam sit amet sem sit amet orci consectetur cursus. Cras non ornare nisi, quis ultrices urna. Aliquam luctus quam sit amet dapibus mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi nunc ipsum, semper condimentum hendrerit at, condimentum id felis. Fusce molestie sollicitudin diam sed lobortis. Nunc elementum ut velit mollis interdum. In sagittis, felis eu ultricies pellentesque, sapien dolor fermentum dolor, malesuada vehicula nisi sapien tristique neque. Maecenas molestie suscipit mi nec condimentum. Proin pretium purus id tellus mollis, ut maximus magna faucibus. Phasellus vitae elit est. Vestibulum rhoncus neque eget vehicula tristique. Etiam et lobortis velit.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default InstallmentAgreement;