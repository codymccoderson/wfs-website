import React from 'react';
import styled from 'styled-components';
import wfslogo from '../wfslogo.jpg'

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

const StyledHomeTitle = styled.h1`
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

function Home() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledHomeTitle>
                Tax Preparation, Accounting, and Bookkeeping
            </StyledHomeTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>
                    Whether you need help with accounting and bookkeeping for your small business, are looking for knowledgeable and experienced tax return preparation, or are confused about recent changes to the tax laws that affect your personal or business taxes, White's Financial Services can give you the help you need.
                </StyledParagraph> 
                <StyledParagraph>
                    We are a full service tax and accounting practice, with over 17 years of experience helping individuals and small businesses. We are experts at federal and state tax return preparation, and currently represent clients located in Alabama, Georgia, California, Florida, New York, North Carolina, Illinois and Texas to list a few. We handle tax matters nationally, and are often called upon to help clients satisfy outstanding tax filings, and have successfully negotiated with state and federal tax authorities for reductions in fines and penalties.
                </StyledParagraph>
                <StyledParagraph>
                    If you are losing sleep over tax or accounting problems or just need expert tax or accounting advice, give us a call today at 678-265-8195 or email us at info@whitesfinancialservices.com.
                </StyledParagraph>
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default Home;