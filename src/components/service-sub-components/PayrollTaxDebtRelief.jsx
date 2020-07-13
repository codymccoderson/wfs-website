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

function PayrollTaxDebtRelief() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Payroll Tax Debt Relief
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc mi, cursus ac malesuada sed, venenatis vel quam. Praesent at gravida nisi. Curabitur sagittis tristique lorem at pellentesque. Duis et nisi eu quam semper gravida. Proin egestas id libero vel imperdiet. Vestibulum id congue ligula. Aliquam at ornare quam, sit amet efficitur risus. Phasellus velit sem, fringilla eget gravida sit amet, faucibus vel felis. Duis in mattis tortor.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default PayrollTaxDebtRelief;