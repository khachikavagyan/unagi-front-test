import React from 'react';
import Navbar from './Navbar';

const withNavbar = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P) => (
    <div>
      <Navbar />
      <Component {...props} />
    </div>
  );
};

export default withNavbar;
