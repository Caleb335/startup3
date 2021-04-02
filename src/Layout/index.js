import React from "react";
import Header from "./Header";
import PropTyes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

// Type checking the props that gets
// passed into the Layout component to see if they're the
// valid ones
Layout.propTypes = {
  children: PropTyes.node.isRequired,
};
