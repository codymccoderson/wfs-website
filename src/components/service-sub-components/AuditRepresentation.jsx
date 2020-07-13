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

function AuditRepresentation() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Audit Representation
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur, lectus vel lacinia mattis, ex nisl placerat nibh, a aliquet mauris tellus at libero. Sed suscipit orci at lectus placerat, sed vestibulum leo aliquet. Maecenas lacus orci, hendrerit a tempus non, aliquam nec neque. Ut accumsan feugiat augue, at scelerisque ante luctus ac. Morbi non justo ipsum. Cras eu nisl nec lorem commodo luctus. Duis gravida scelerisque pellentesque. Phasellus sed ullamcorper massa. Maecenas bibendum rhoncus pellentesque. Maecenas sem ligula, congue nec lacinia vel, auctor sed elit. Suspendisse potenti.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default AuditRepresentation;