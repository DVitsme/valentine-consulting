import React, { Component } from 'react';
import PostContact from './PostContact.component';

export default class Form extends Component {
  render() {
    return (
      <section
        className="container-fluid page-section clearfix"
        ref="contact"
        style={{ marginBottom: '3rem' }}
      >
        <div id="section-contact" className="page-section">
          <h2 className="bottommargin">Get in Touch</h2>

          <div className="row clearfix">
            <div className="col-lg-8">
              <div className="form-widget">
                <div className="form-result"></div>

                <PostContact />
              </div>
            </div>

            <div className="col-lg-4">
              <h4>Mailing Address</h4>

              <div style={{ fontSize: '16px', lineHeight: '1.7' }}>
                <h5 style={{ marginBottom: '5px' }}>Physical Mail</h5>
                <address style={{ lineHeight: '1.7' }}>
                  2323 SPENCERVILLE RD
                  <br />
                  P.O 256
                  <br />
                  SPENCERVILLE, MD 20868-9998
                </address>
                <div className="clear topmargin"></div>
                {/* <abbr title="Phone Number">
                  <strong>Phone:</strong>
                  </abbr>{' '}
                  (91) 8547 632521 
                  <br />
                */}
                <h5 style={{ marginBottom: '5px' }}>Electronic Mail</h5>
                <abbr title="Email Address">
                  <strong>Email:</strong>
                </abbr>{' '}
                dawn@valentineconsulting.net
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
