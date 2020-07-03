import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import IntakeForm from './components/IntakeForm';
import ContactUs from './components/ContactUs';
import Payment from './components/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/intake" component={IntakeForm} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/payment" component={Payment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
