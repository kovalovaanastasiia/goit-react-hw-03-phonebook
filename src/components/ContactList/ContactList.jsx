import React from 'react';
import { StyledList } from './styled';

export const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <StyledList>
      {contacts
        // .filter(({ name }) =>
        //   name.toLowerCase().includes(filter.toLowerCase()),
        // )
        .map((contact) => (
          <li className='list-item' key={contact.id}>
            <p>{contact.name}</p>
            <span>{contact.number}</span>
            <button
              type='button'
              className='delete-button'
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </StyledList>
  );
};

