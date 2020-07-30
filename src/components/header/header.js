import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
//import Logo from '-!svg-react-loader!../../images/branding/Logo.svg';
import Logo from '../../images/branding/Logo.jpg';
import { parentSiteUrl, companyName } from '../../../site-config';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = () => {
  return (
    <AnimatedContainer>
      <header>
        <div className="flex mx-2 md:mx-6 mt-4 mb-6">
          <div className="flex items-center">
            <a href={parentSiteUrl} className="unstyled cursor-pointer">
              <h1 className="title ml-2">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ height: '60px', display: 'Inline' }}
                ></img>
              </h1>
            </a>
            <h1 className="title ml-2" style={{ height: '60px' }}>
                {companyName} - Our People
            </h1>
          </div>
          <div className="action-btn-container print-hidden">
          </div>
        </div>
      </header>
    </AnimatedContainer>
  );
};

Header.propTypes = {
  displayActions: PropTypes.bool.isRequired,
  profileId: PropTypes.string,
};

export default Header;
