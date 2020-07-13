import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import IntakeForm from './components/IntakeForm';
import ContactUs from './components/ContactUs';
import Payment from './components/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import UnfiledTaxReturns from './components/service-sub-components/UnfiledTaxReturns';
import WageGarnishment from './components/service-sub-components/WageGarnishment';
import BankLevy from './components/service-sub-components/BankLevy';
import TaxLiens from './components/service-sub-components/TaxLiens';
import PayrollTaxDebtRelief from './components/service-sub-components/PayrollTaxDebtRelief';
import DelinquentTaxes from './components/service-sub-components/DelinquentTaxes';
import IRSTaxPaymentPlans from './components/service-sub-components/IRSTaxPaymentPlans';
import OfferInCompromise from './components/service-sub-components/OfferInCompromise';
import InstallmentAgreement from './components/service-sub-components/InstallmentAgreement';
import AuditRepresentation from './components/service-sub-components/AuditRepresentation';
import PenaltyAbatement from './components/service-sub-components/PenaltyAbatement';
import IRSAuditRepresentation from './components/service-sub-components/IRSAuditRepresentation';
import TranscriptAnalysis from './components/service-sub-components/TranscriptAnalysis';
import FullRepresentation from './components/service-sub-components/FullRepresentation';
import CurrentlyNotCollectible from './components/service-sub-components/CurrentlyNotCollectible';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav/>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/services/:unfiled-tax-returns' component={UnfiledTaxReturns} />
        <Route path='/services/:wage-garnishment' component={WageGarnishment} />
        <Route path='/services/:bank-levy' component={BankLevy} />
        <Route path='/services/:tax-liens' component={TaxLiens} />
        <Route path='/services/:payroll-tax-debt-relief' component={PayrollTaxDebtRelief} />
        <Route path='/services/:delinquent-taxes' component={DelinquentTaxes} />
        <Route path='/services/:irs-tax-payment-plans' component={IRSTaxPaymentPlans} />
        <Route path='/services/:offer-in-compromise' component={OfferInCompromise} />
        <Route path='/services/:installment-agreement' component={InstallmentAgreement} />
        <Route path='/services/:audit-representation' component={AuditRepresentation} />
        <Route path='/services/:penalty-abatement' component={PenaltyAbatement} />
        <Route path='/services/:irs-audit-representation' component={IRSAuditRepresentation} />
        <Route path='/services/:transcript-analysis' component={TranscriptAnalysis} />
        <Route path='/services/:full-representation' component={FullRepresentation} />
        <Route path='/services/:currently-not-collectible' component={CurrentlyNotCollectible} />
        <Route path='/intake' component={IntakeForm} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/payment' component={Payment} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
