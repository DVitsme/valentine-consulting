import React from 'react';

const Form = () => {
  return (
    <section className="container-fluid page-section clearfix">
      <div id="section-contact" className="page-section">
        <h2 className="bottommargin">Get in Touch.</h2>

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
            <h4>Headquarters.</h4>

            <div style={{ fontSize: '16px', lineHeight: '1.7' }}>
              <address style={{ lineHeight: '1.7' }}>
                795 Folsom Ave, Suite 600
                <br />
                San Francisco, CA 94107
                <br />
              </address>
              <div className="clear topmargin"></div>
              <abbr title="Phone Number">
                <strong>Phone:</strong>
              </abbr>{' '}
              (91) 8547 632521
              <br />
              <abbr title="Fax">
                <strong>Fax:</strong>
              </abbr>{' '}
              (91) 11 4752 1433
              <br />
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
};

export default Form;
