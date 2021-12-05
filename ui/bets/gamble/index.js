import { useState, memo } from "react";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import { Container, Label, Form, Input } from "./components";
import Button from "../../commons/button";

const Gamble = ({ onSubmit }) => {
  const [result, setResult] = useState("");

  // handle submit event and callback
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (result) {
      onSubmit(result);
    } else {
      toast.error("No selected result");
    }
  };

  // handle event change input
  const handleOnChange = (event) => {
    setResult(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Input mask="9 - 9" value={result} onChange={handleOnChange} />
        <Button>Gamble</Button>
      </Form>
      <Label>This action is paid and costs 1 ether</Label>
      <Toaster />
    </Container>
  );
};

Gamble.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(Gamble);
