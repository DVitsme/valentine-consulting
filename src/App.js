import React, { Component } from 'react';

import SideCover from './components/SideCover.component.jsx';
import Header from './components/Header/Header.component.jsx';
import HeroText from './components/Hero/HeroText.component.jsx';
import Services from './components/Services/Services.component.jsx';
import Portfolio from './components/Portfolio/PortfolioContainer.component.jsx';
import Form from './components/Form/Form.component';
import Footer from './components/Footer/Footer.component';
import Apart from './components/SetsUsApart/Apart.component.jsx';

export default class App extends Component {
  render() {
    let contact = React.createRef();
    return (
      <div>
        <SideCover />
        <div id="wrapper">
          {/* <Header /> */}
          <HeroText />
          <Services />
          {/* <Portfolio /> */}
          <Apart />
          <Form />
          <Footer />
        </div>
      </div>
    );
  }
}
