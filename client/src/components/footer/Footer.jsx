import React from 'react';
import './footer.scss';
import Logo from '../../asset/salt.png';

const Footer = () => {
  return (
    <footer >
      <img
        className='logo'
        src={Logo}
        alt=''
      />
      <span>
        Made with ❤️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
