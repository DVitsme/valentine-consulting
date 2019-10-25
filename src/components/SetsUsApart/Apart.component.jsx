import React from 'react';

import Evidence from '../../static/images/icons/sets-us-apart/result.svg';
import Creative from '../../static/images/icons/sets-us-apart/experience.svg';
import Reliablility from '../../static/images/icons/sets-us-apart/team.svg';

const Apart = () => {
  return (
    <section className="container-fluid page-section clearfix">
      <h2 style={{ marginBottom: '0' }}>What Sets Us Apart</h2>
      <div className="row">
        <div className="col-md-4 mt-5">
          <div className="feature-box fbox-center noborder">
            <div className="fbox-icon">
              <img
                src={Evidence}
                alt="Edvidence based Icon"
                className="nobg noradius"
              />
            </div>
            <h3 className="nott ls0">
              A strong and evidence based point of view
            </h3>
            <p>
              Regardless of what work we do, we will explain how we arrived at
              the conclusions, what it really means and provide the evidence we
              used to justify our conclusion.
            </p>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <div className="feature-box fbox-center noborder">
            <div className="fbox-icon">
              <img
                src={Creative}
                alt="Creative Icon"
                className="nobg noradius"
              />
            </div>
            <h3 className="nott ls0">A creative approach</h3>
            <p>
              We use a blend of traditional research frameworks to meet the
              needs of the community or the program. Examples of our favorite
              frameworks are appreciative inquiry, collective impact,
              intersectionality, or photovoice.
            </p>
          </div>
        </div>
        <div className="col-md-4 mt-5">
          <div className="feature-box fbox-center noborder">
            <div className="fbox-icon">
              <img
                src={Reliablility}
                alt="Reliablility Icon"
                className="nobg noradius"
              />
            </div>
            <h3 className="nott ls0">Approachability and reliability</h3>
            <p>
              We still believe in customer service so we are never too busy to
              take a call or answer questions. In short we really love what we
              do and take a lot of pride in delivering work that is both data
              informed and based on the programs values.
            </p>
          </div>
        </div>
      </div>
      <div className="line topmargin-lg bottommargin-lg"></div>
    </section>
  );
};

export default Apart;
