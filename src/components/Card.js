import React from "react";
import PropTpyes from "prop-types";

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;

Card.propTypes = {
  children: PropTpyes.node.isRequired,
};
