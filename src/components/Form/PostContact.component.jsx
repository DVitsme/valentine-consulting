import React, { Component } from 'react';
import { firestore } from '../../firebase/firebase';

export default class PostContact extends Component {
  state = { name: '', email: '', subject: '', message: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, email, subject, message } = this.state;

    const post = {
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    };

    firestore.collection('contact').add(post);

    this.setState({ name: '', email: '', subject: '', message: '' });
  };
  render() {
    const { name, email, subject, message } = this.state;

    return (
      <form
        className="nobottommargin"
        id="template-contactform"
        onSubmit={this.handleSubmit}
      >
        <div className="form-process"></div>
        <div className="form-row">
          <div className=" form-group col-md-6">
            <input
              type="text"
              id="template-contactform-name"
              name="name"
              value={name}
              className="sm-form-control border-form-control required"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div className=" col_last form-group col-md-6">
            <input
              type="email"
              id="template-contactform-email"
              name="email"
              value={email}
              className="required email sm-form-control border-form-control"
              placeholder="Email Address"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="clear"></div>

        <div className="col_full">
          <input
            type="text"
            id="template-contactform-subject"
            name="subject"
            value={subject}
            className="required sm-form-control border-form-control"
            placeholder="Subject"
            onChange={this.handleChange}
          />
        </div>

        <div className="col_full">
          <textarea
            className="required sm-form-control border-form-control"
            id="template-contactform-message"
            name="message"
            rows="7"
            cols="30"
            placeholder="Your Message"
            onChange={this.handleChange}
            value={message}
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

        <input type="hidden" name="prefix" value="template-contactform-" />
      </form>
    );
  }
}
