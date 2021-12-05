import React, { memo } from "react";
import PropTypes from "prop-types";
import Container from "./components";

const Burger = ({ open, setOpen }) => {
  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </Container>
  );
};

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default memo(Burger);
