import { useEffect, useState, memo } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import useBlockScrolling from '../../../hooks/useBlockScrolling';
import Button from "../button";
import { Container, Title } from "./components";

const Modal = ({ title, children, open, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  // block user scrolling
  useBlockScrolling(open);

  // effect to detect is client side
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // effect to detect when user click escape key, to close modal
  useEffect(() => {
    const handleEscapeEvent = (event) => {
      if (event.keyCode === 27 && open) {
        onClose();
      }
    };

    if (isBrowser) {
      document.addEventListener("keydown", handleEscapeEvent, false);
      return () => {
        window.removeEventListener("keydown", handleEscapeEvent, false);
      };
    }
  }, [isBrowser, onClose, open]);

  if (isBrowser) {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot && open) {
      return ReactDOM.createPortal(
        <Container>
          {title && <Title>{title}</Title>}
          <Button onClick={onClose}>x</Button>
          {children}
        </Container>,
        modalRoot
      );
    }
  }

  return null;
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  open: false,
}

export default memo(Modal);
