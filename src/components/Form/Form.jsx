import React, { Component } from 'react';
import { StyledForm } from './styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  changeHandler = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  submitHandler = event => {
    event.preventDefault();

    const contactData = {
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(contactData);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.submitHandler}>
        <label className='form-label'>
          <span className='label-name'>Name</span>
          <input
            className='form-input'
            type='text'
            value={this.state.name}
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.changeHandler}
          />
        </label>
        <label className='form-label'>
          <span className='label-name'>Number</span>
          <input
            className='form-input'
            type='tel'
            value={this.state.number}
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
            onChange={this.changeHandler}
          />
        </label>
        <button type='submit' className='form-btn'>
          Add contact
        </button>
      </StyledForm>
    );
  }
}
