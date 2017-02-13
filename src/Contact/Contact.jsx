import React, { PropTypes } from 'react';

import './Contact.css';

const baseClass = 'contact';

const Contact = ({
  company_name,
  email,
  icon,
  job,
  name,
  phone,
  profile_image,
}) => {
  return (
    <div className={`${baseClass}`}>
      <img
        className={`${Contact.baseClass}__profile-image`}
        src={profile_image}
        alt={name}
      />
      <img
        className={`${baseClass}__icon`}
        src={icon}
        alt="Icon"
      />
      <p className={`${baseClass}__name`}>{name}</p>
      <p className={`${baseClass}__details`}>{job} | @{company_name}</p>
      <br />

      <div className={`${Contact.baseClass}__hoverinfo`}>
        <p className={`${baseClass}__details`}>Phone Number {phone}</p>
        <p className={`${baseClass}__details`}>{email}</p>
      </div>
    </div>
  );
};

Contact.baseClass = baseClass;

Contact.propTypes = {
  company_name: PropTypes.string,
  email: PropTypes.string,
  icon: PropTypes.string,
  job: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  profile_image: PropTypes.string,
};

export default Contact;
