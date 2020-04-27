import { findIndex } from 'lodash';
import React, { Component, Fragment } from 'react';
import Input from '../shared/Input';
import FormValidation from '../utils/FormValidation';

class Footer extends Component {
  state = {
    inputFields: [
      {
        placeholder: 'Nome e Cognome',
        type: 'name',
        value: '',
        error: '',
      },
      {
        placeholder: 'Email',
        type: 'mail',
        value: '',
        error: '',
      },
      {
        type: 'checkbox',
        checked: false,
        text: 'Acconsento al trattamento dei dati',
        error: '',
      },
    ],
  };

  changeInputValue = (item, value) => {
    const { inputFields } = this.state;
    const updatedFields = [...inputFields];
    const index = findIndex(updatedFields, (f) => f.type === item.type);
    updatedFields[index].value = value;
    this.setState({ inputFields: updatedFields });
  };

  submit = () => {
    const { inputFields } = this.state;
    const updatedFields = [...inputFields];
    const error = this.validateFields();
    if (error) return;
    updatedFields.map((field) => (field.value = ''));
    this.setState({ inputFields: updatedFields });
  };

  validateFields = () => {
    const { inputFields } = this.state;
    const updatedFields = FormValidation(inputFields).fields;
    const error = FormValidation(inputFields).error;
    this.setState({ inputFields: updatedFields });
    return error;
  };

  checkAgreement = (index) => {
    const { inputFields } = this.state;
    const updatedFields = [...inputFields];
    updatedFields[index].checked = !inputFields[index].checked;
    this.setState({
      inputFields: updatedFields,
    });
  };

  renderInputFields = () => {
    const { inputFields } = this.state;
    return inputFields.map((field, index) => {
      if (field.type === 'checkbox') {
        return (
          <label className="agreement-checkbox" key={index}>
            <input type="checkbox" />
            <span className="checked" onClick={() => this.checkAgreement(index)} />
            <span className="agreement-text">{field.text}</span>
            {field.error && <p className="text-error">{field.error}</p>}
          </label>
        );
      }

      return (
        <Fragment key={index}>
          <Input
            className="validated-form"
            type="text"
            onChange={(event) => {
              this.changeInputValue(field, event.target.value);
            }}
            placeholder={field.placeholder}
            value={field.value}
          />
          {field.error && <p className="text-error">{field.error}</p>}
        </Fragment>
      );
    });
  };

  render() {
    return (
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__main-content-area">
            <div className="footer__text-box">
              <h2 className="footer-text__header">Lampadari made in italy</h2>
              <p className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea
              </p>
            </div>
            <div className="footer__text-box">
              <h2 className="footer-text__header">lampadari artigianali</h2>
              <p className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea
              </p>
            </div>
            <div className="footer__text-box">
              <h2 className="footer-text__header">45 anni di esperienza</h2>
              <p className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea
              </p>
            </div>
            <div className="footer__form-box">
              <h2 className="footer-text__header">NEWSLETTER</h2>
              <div>{this.renderInputFields()}</div>
              <button className="subscribe" type="submit" onClick={this.submit}>
                ISCRIVITI
              </button>
            </div>
          </div>
          <div className="footer__bottom-line">
            <div className="contacts-line">
              <span className="contact">MMLAMPADARI srl</span>
              <span className="contact">Via Feltrina 00</span>
              <span className="contact">31111 Pederobba (TV)</span>
              <span className="contact">0423.123456</span>
              <a className="contact" href="mailto:info@mmlampadari.mm" rel="noopener noreferrer">
                info@mmlampadari.mm
              </a>
              <span className="contact">P.IVA 04123456789</span>
            </div>
            <div className="networks">
              <a className="facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" />
              <a className="instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" />
              <a className="pinterest" href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" />
            </div>
            <div className="select-languages__line">
              <span>ITA</span>
              <span>ENG</span>
              <span>DEU</span>
              <span>PYC</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
