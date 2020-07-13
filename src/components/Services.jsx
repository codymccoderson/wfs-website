import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import wfslogo from '../wfslogo.jpg'

const StyledBackground = styled.div `
`
const StyledContent = styled.div `
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
const StyledServicesTitle = styled.h1 `
  position: relative; 
  bottom: 1rem;
  font-size: 2.8rem;
`
const UnorderedListWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledUnorderedListOne = styled.ul `
  display: flex;
  flex-flow: column;
  list-style-type: none;
  text-align: left;
  margin-right: 3.125rem;
`

const StyledUnorderedListTwo = styled.ul `
  display: flex;
  flex-flow: column;
  list-style-type: none;
  text-align: left;
  margin-right: 3.125rem;
`
const StyledUnorderedListThree = styled.ul `
  display: flex;
  flex-flow: column;
  list-style-type: none;
  text-align: left;
`

const StyledListItem = styled.li `
  font-size: 1.4rem;
  margin-bottom: 10px;
`


function Services() {
  return (
    <StyledBackground>
      <StyledContent>
        <ImageWrapper>
          <img className="theLogoImg" src={wfslogo} alt="This is the White's Financial Services logo."/>
        </ImageWrapper>
        <StyledServicesTitle>
          Services Menu
        </StyledServicesTitle>
        <UnorderedListWrapper>
          <StyledUnorderedListOne>
            <Link to='/services/unfiled-tax-returns' style={{ color: 'black' }}>
              <StyledListItem>
                Unfiled Tax Returns
              </StyledListItem>
            </Link>
            <Link to='/services/wage-garnishment' style={{ color: 'black' }}>
              <StyledListItem>
                Wage Garnishment
              </StyledListItem>
            </Link>
            <Link to='/services/bank-levy' style={{ color: 'black' }}>
              <StyledListItem>
                Bank Levy
              </StyledListItem>
            </Link>
            <Link to='/services/tax-liens' style={{ color: 'black' }}>
              <StyledListItem>
                Tax Liens
              </StyledListItem>
            </Link>
            <Link to='/services/payroll-tax-debt-relief' style={{ color: 'black' }}>
              <StyledListItem>
                Payroll Tax Debt Relief
              </StyledListItem>
            </Link>
          </StyledUnorderedListOne>
          <StyledUnorderedListTwo>
            <Link to='/services/delinquent-taxes' style={{ color: 'black' }}>
              <StyledListItem>
                Delinquent Taxes
              </StyledListItem>
            </Link>
            <Link to='/services/irs-tax-payment-plans' style={{ color: 'black' }}>
              <StyledListItem>
                IRS Tax Payment Plans
              </StyledListItem>
            </Link>
            <Link to='/services/offer-in-compromise' style={{ color: 'black' }}>
              <StyledListItem>
                Offer In Compromise
              </StyledListItem>
            </Link>
            <Link to='/services/installment-agreement' style={{ color: 'black' }}>
              <StyledListItem>
                Installment Agreement
              </StyledListItem>
            </Link>
            <Link to='/services/audit-representation' style={{ color: 'black' }}>
              <StyledListItem>
                Audit Representation
              </StyledListItem>
            </Link>
          </StyledUnorderedListTwo>
          <StyledUnorderedListThree>
            <Link to='/services/penalty-abatement' style={{ color: 'black' }}>
              <StyledListItem>
                Penalty Abatement
              </StyledListItem>
            </Link>
            <Link to='/services/irs-audit-representation' style={{ color: 'black' }}>
              <StyledListItem>
                IRS Audit Representation
              </StyledListItem>
            </Link>
            <Link to='/services/transcript-analysis' style={{ color: 'black' }}>
              <StyledListItem>
                Transcript Analysis
              </StyledListItem>
            </Link>
            <Link to='/services/full-representation' style={{ color: 'black' }}>
              <StyledListItem>
                Full Representation
              </StyledListItem>
            </Link>
            <Link to='/services/currently-not-collectible' style={{ color: 'black' }}>
              <StyledListItem>
                Currently Not Collectible
              </StyledListItem>
            </Link>
          </StyledUnorderedListThree>
        </UnorderedListWrapper>
      </StyledContent>
    </StyledBackground>
  );
}

export default Services;