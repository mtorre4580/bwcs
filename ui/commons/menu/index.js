import React, { memo, useEffect, useState } from "react";
import { BigHead } from "@bigheads/core";
import { Container, Title, Header, Label, Footer } from "./components";
import useCurrentAccount from "../../../hooks/useCurrentAccount";
import useWindowSize from "../../../hooks/useWindowSize";
import useBlockScrolling from '../../../hooks/useBlockScrolling';
import Slider from "./components/Slider";
import Burger from "../burger";

const DESKTOP = 768;

const Menu = () => {
  const account = useCurrentAccount() || "Empty account";
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);

  // block user scrolling
  useBlockScrolling(open);

  if (width) {
    if (width < DESKTOP) {
      return (
        <>
          <Burger open={open} setOpen={setOpen} />
          <Slider open={open}>
            <Container>
              <Header>
                <Title>Account</Title>
                <BigHead />
                <Label>{account}</Label>
              </Header>
              <Footer>
                <Label>© BWCS</Label>
              </Footer>
            </Container>
          </Slider>
        </>
      );
    }

    return (
      <Container>
        <Header>
          <Title>Account</Title>
          <BigHead />
          <Label>{account}</Label>
        </Header>
        <Footer>
          <Label>© BWCS</Label>
        </Footer>
      </Container>
    );
  }

  return null;
};

export default memo(Menu);
