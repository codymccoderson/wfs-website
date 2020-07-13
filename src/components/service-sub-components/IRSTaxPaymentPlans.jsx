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

function IRSTaxPaymentPlans() {
    return (
      <StyledBackground>
          <StyledContent>
            <ImageWrapper>
                <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
            </ImageWrapper>  
            <StyledSubComponentTitle>
                IRS Tax Payment Plans
            </StyledSubComponentTitle>
            <StyledParagraphWrapper>
                <StyledParagraph>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar nibh quis scelerisque mattis. Sed hendrerit congue ex, at malesuada nisl facilisis vel. In sed fermentum justo. Phasellus id elit non nunc ultrices mollis quis at sapien. Nullam vel leo sit amet lacus tincidunt facilisis ac ut sapien. Duis feugiat tellus ornare lectus volutpat, vel consequat odio convallis. Maecenas vestibulum erat quis elementum eleifend. Pellentesque gravida turpis vehicula lorem dignissim, ut sagittis nisi rutrum. Proin vitae ipsum urna. Vivamus aliquam erat in magna scelerisque accumsan. Praesent auctor, lorem a accumsan aliquam, lorem nisl volutpat mi, ultrices ornare velit ligula a eros. Nullam nec turpis non odio pellentesque pharetra non a nisi. Praesent mi dolor, pellentesque vel nisi a, semper rutrum lorem. Aliquam ultricies, enim nec sodales convallis, nibh nisl consequat nunc, vitae finibus augue lectus quis lectus. Nunc vel rhoncus velit.
                </StyledParagraph> 
            </StyledParagraphWrapper> 
          </StyledContent> 
      </StyledBackground>
    );
  }
  
  export default IRSTaxPaymentPlans;