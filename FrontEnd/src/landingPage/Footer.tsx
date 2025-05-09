import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
