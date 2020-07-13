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

function DelinquentTaxes() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                Delinquent Taxes
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, risus nec aliquam tincidunt, nunc lorem scelerisque purus, ac pretium nisi risus quis dolor. Vestibulum consectetur massa enim, ut commodo leo imperdiet nec. Etiam gravida egestas lacus ac faucibus. Sed velit nulla, dictum ut dui in, maximus malesuada est. Curabitur enim velit, sollicitudin sed turpis sit amet, volutpat tempor dui. Aenean condimentum vitae urna pulvinar aliquet. Nulla imperdiet at ipsum eget viverra. Fusce faucibus laoreet commodo. Mauris lacinia vehicula semper. Vestibulum dictum, odio sit amet blandit cursus, ligula velit congue tortor, a molestie velit ligula a dolor. Nullam a mi dui. Praesent varius nisi vitae euismod elementum. Morbi vehicula ipsum in laoreet ornare. Donec ut interdum sem, at suscipit eros. Aliquam metus tortor, dictum non orci vel, tempus cursus velit. Integer vel turpis eget nulla elementum tempor eget at nisi.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default DelinquentTaxes;