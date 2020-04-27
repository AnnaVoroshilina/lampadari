import { findIndex } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import FormValidation from '../../utils/FormValidation';
import Input from '../Input';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: [
        {
          placeholder: 'Email',
          type: 'mail',
          value: '',
          error: '',
        },
        {
          placeholder: 'Password',
          type: 'password',
          value: '',
          error: '',
        },
      ],
      registration: [
        {
          placeholder: 'Nome',
          type: 'name',
          value: '',
          error: '',
        },
        {
          placeholder: 'Cognome',
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
          placeholder: 'Password',
          type: 'password',
          value: '',
          error: '',
        },
        {
          type: 'checkbox',
          checked: false,
          text: 'Acconsento al trattamento dei dati',
          error: '',
        },
        {
          type: 'checkbox',
          checked: false,
          text: 'Mi iscrivo alla Newsletter',
          error: '',
        },
      ],
    };
  }

  changeInputValue = (item, value, fields) => {
    const updatedFields = [...fields];
    const index = findIndex(updatedFields, (f) => f.type === item.type);
    updatedFields[index].value = value;
    this.setState({ [fields]: updatedFields });
  };

  validateLoginForm = (fields) => {
    const updatedFields = FormValidation(fields).fields;
    const error = FormValidation(fields).error;
    this.setState({ [fields]: updatedFields });
    return error;
  };

  submitLoginForm = (event) => {
    const { login } = this.state;
    event.preventDefault();
    if (!this.validateLoginForm(login)) return;
  };

  submitRegistrationForm = (event) => {
    const { registration } = this.state;
    event.preventDefault();
    if (!this.validateLoginForm(registration)) return;
  };

  checkAgreement = (index, fields) => {
    const updatedFields = [...fields];
    updatedFields[index].checked = !fields[index].checked;
    this.setState({
      [fields]: updatedFields,
    });
  };

  renderRegistrationFields = () => {
    const { registration } = this.state;
    return registration.map((field, index) => {
      if (field.type === 'checkbox') {
        return (
          <label className="agreement-checkbox" key={index}>
            <input type="checkbox" />
            <span className="checked" onClick={() => this.checkAgreement(index, registration)} />
            <span className="agreement-text">{field.text}</span>
            {field.error && <p className="text-error">{field.error}</p>}
          </label>
        );
      }

      return (
        <Fragment key={index}>
          <Input
            type="text"
            onChange={(event) => {
              this.changeInputValue(field, event.target.value, registration);
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
    const { login } = this.state;
    const { close } = this.props;

    return (
      <div className="login-popup">
        <div className="login-popup-header">
          <h2 className="login-popup-header__title">AREA RISERVATA</h2>
          <div className="close-button" onClick={close} />
        </div>
        <div className="login-popup-forms">
          <form className="login-form" onSubmit={this.submitLoginForm}>
            <h3 className="login-form__title">ACCEDI</h3>
            {login.map((field, index) => {
              return (
                <Fragment key={index}>
                  <Input
                    type="text"
                    onChange={(event) => {
                      this.changeInputValue(field, event.target.value, login);
                    }}
                    placeholder={field.placeholder}
                    value={field.value}
                  />
                  {field.error && <p className="text-error">{field.error}</p>}
                </Fragment>
              );
            })}
            <button type="submit" className="login-form__submit">
              ACCEDI
            </button>
          </form>
          <form className="login-form" onSubmit={this.submitRegistrationForm}>
            <h3 className="login-form__title">REGISTRATI</h3>
            {this.renderRegistrationFields()}
            <button type="submit" className="login-form__submit">
              ISCRIVITI
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  close: PropTypes.func,
};

export default Login;
