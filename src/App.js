import React from 'react';

const App = () => {
  return (
    <Navbar>
      <li>child 1</li>
      <li>child 2</li>
      <li>child 3</li>
    </Navbar>
  );
};

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  );
};

export default App;
