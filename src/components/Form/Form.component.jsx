import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <section className="container-fluid page-section clearfix" ref="contact">
        <div id="section-contact" className="page-section">
          <h2 className="bottommargin">Get in Touch</h2>

          <div className="row clearfix">
            <div className="col-lg-8">
              <div className="form-widget">
                <div className="form-result"></div>

                <form
                  className="nobottommargin"
                  id="template-contactform"
                  name="template-contactform"
                  action="include/form.php"
                  method="post"
                >
                  <div className="form-process"></div>

                  <div className="col_half">
                    <input
                      type="text"
                      id="template-contactform-name"
                      name="template-contactform-name"
                      value=""
                      className="sm-form-control border-form-control required"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col_half col_last">
                    <input
                      type="email"
                      id="template-contactform-email"
                      name="template-contactform-email"
                      value=""
                      className="required email sm-form-control border-form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="clear"></div>

                  <div className="col_full">
                    <input
                      type="text"
                      id="template-contactform-subject"
                      name="subject"
                      value=""
                      className="required sm-form-control border-form-control"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="col_full">
                    <textarea
                      className="required sm-form-control border-form-control"
                      id="template-contactform-message"
                      name="template-contactform-message"
                      rows="7"
                      cols="30"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div className="col_full">
                    <button
                      className="button button-black noleftmargin topmargin-sm"
                      type="submit"
                      id="template-contactform-submit"
                      name="template-contactform-submit"
                      value="submit"
                    >
                      Send Message
                    </button>
                  </div>

                  <div className="clear"></div>

                  <div className="col_full hidden">
                    <input
                      type="text"
                      id="template-contactform-botcheck"
                      name="template-contactform-botcheck"
                      value=""
                      className="sm-form-control"
                    />
                  </div>

                  <input
                    type="hidden"
                    name="prefix"
                    value="template-contactform-"
                  />
                </form>
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
