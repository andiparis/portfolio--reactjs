// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import SocialItem from './SocialItem';

function SocialList({ socials }) {
  return (
    <div className="socials">
      {socials.map((social) => (
        <SocialItem key={social.id} {...social} />
      ))}
    </div>
  );
}

SocialList.propTypes = {
  socials: PropTypes.array.isRequired,
};

export default SocialList;
