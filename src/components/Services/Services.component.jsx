import React from 'react';

const Services = () => {
  return (
    <section className="container-fluid page-section clearfix">
      <div id="section-services" className="page-section">
        <h2 className="bottommargin">Services</h2>

        <div className="row clearfix">
          <div className="col-lg-6 bottommargin">
            <div className="feature-box fbox-plain fbox-dark">
              <div className="fbox-icon">
                <a href="/">
                  <i className="icon-et-desktop"></i>
                </a>
              </div>
              <h3>Strategic Planning</h3>
              <p>
                To often strategic plans are done fast and then put on a shelf.
                We support organizations and programs in a strategic planning
                process. This includes organizational and stakeholder engagement
                using cascading goals; utilize market intelligence data for
                strategic differentiation; and articulate the findings in a plan
                which aligns with the organizations mission and vision and
                outlines the best way to move forward in changing environments.
              </p>
            </div>
          </div>
          <div className="col-lg-6 bottommargin">
            <div className="feature-box fbox-plain fbox-dark">
              <div className="fbox-icon">
                <a href="/">
                  <i className="icon-et-global"></i>
                </a>
              </div>
              <h3>Program Evaluation</h3>
              <p>
                Program evaluation has a great deal of components. We support
                organizations in communicating the program’s theory of change;
                create data monitoring and evaluation plans; develop logic
                models with program indicators and timelines; design data
                monitoring tools; and provide data analysis for process and
                outcome evaluation. Finally, we support organizations in
                developing tools to communicate social impact strategies that
                strengthen their programs and advance their mission and vision.
              </p>
            </div>
          </div>
          <div className="col-lg-6 bottommargin">
            <div className="feature-box fbox-plain fbox-dark">
              <div className="fbox-icon">
                <a href="/">
                  <i className="icon-et-megaphone"></i>
                </a>
              </div>
              <h3>Community and Organizational Research</h3>
              <p>
                Understanding issues in your community or in your organization
                can be a challenge. We provide custom reports using community
                level data as well as information from members of the community,
                key informants and organizational stakeholders to conduct
                meaningful research. The reports can be used to build
                organizational capacity, define community needs, define
                programmatic needs and shape opportunities for advocacy.
              </p>
            </div>
          </div>
          <div className="col-lg-6 bottommargin">
            <div className="feature-box fbox-plain fbox-dark">
              <div className="fbox-icon">
                <a href="/">
                  <i className="icon-et-tools"></i>
                </a>
              </div>
              <h3>Market Intelligence</h3>
              <p>
                Nonprofit organizations are uniquely aware of the many issues
                facing local communities. We help non-profit and social justice
                organizations understand and utilize market research to enhance
                their work; increase donor funding; reveal opportunities for
                collaboration and partnership; expose gaps in programs; and
                share information with elected officials to influence policy so
                communities can thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="line topmargin-lg bottommargin-lg"></div>
    </section>
  );
};

export default Services;
