import React from 'react';

const HeroText = () => {
  return (
    <section className="container-fluid hero-section clearfix">
      <div className="hero-headline bottommargin">
        <h1>
          Welcome to
          <br /> Valentine Consulting
          <br />
          Consulting for the <span style={{ color: 'black' }}>Community</span>
        </h1>
        <span>
          Valentine Consulting is a group of freelance social scientists who
          provide consultation services to organizations who specialize in
          social justice. At heart we are curious individuals, keen to help
          nonprofits and community based organizations reveal the information
          necessary to communicate their program’s impact and outcomes. Our goal
          is to ensure leadership teams are well equipped in making data driven
          strategic decisions for their organization and associated programs.
        </span>
      </div>

      <div className="line topmargin-lg bottommargin-lg"></div>
    </section>
  );
};

export default HeroText;
