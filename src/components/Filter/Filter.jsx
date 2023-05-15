import React, { Component } from 'react';
import { StyledContainer } from './styled';

export class Filter extends Component {
  state = {
    filter: '',
  };
  searchHandler = event => {
    this.props.onFilter(event.currentTarget.value);
  };

  render() {
    return (
      <StyledContainer className='filter-wrap'>
        <span className='label-name'>Find contacts by name:</span>
        <input
          className='form-input'
          type='text'
          name='filter'
          title='Enter the name of your contact'
          onChange={e => this.searchHandler(e)}
        />
      </StyledContainer>
    );
  }
}
