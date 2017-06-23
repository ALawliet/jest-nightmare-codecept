import React from 'react';

const Button = ({ label, onClick }) => (
  <button
    className="btn btn-default"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
