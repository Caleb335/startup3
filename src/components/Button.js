import React from "react";
import PropTyes from "prop-types";

const Button = ({ className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;

// The (...props) argument in the button component
// allow for the addition of other prop types as attributes of the button

Button.propTypes = {
  children: PropTyes.node.isRequired,
};
