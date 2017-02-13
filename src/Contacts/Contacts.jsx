import React, { PropTypes } from 'react';

import './Contacts.css';

import Contact from '../Contact/Contact';

const baseClass = 'contacts';

const Contacts = ({ data }) => {
  const contacts = (data) ? data.map((contact, index) => {
    return (
      <div className={`${baseClass}__cell`} key={index}>
        <Contact {...contact} />
      </div>
    );
  }) : null;

  return (
    <div className={`${baseClass}__container`}>
      <div className={`${baseClass}__grid`}>
        {contacts}
      </div>
    </div>
  );
};

Contacts.baseClass = baseClass;

Contacts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Contact.propTypes)),
};

export default Contacts;
