import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import whiskeylogo from "../assets/whiskeylogo.png";
import barbackground from "../assets/barbackground.jpg";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${barbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "0, -200px",
      }}
    >
      <Blank></Blank>
      <Banner>
        <StyledLink to="/">
          <IMG src={whiskeylogo} alt="logo" />
          <H1>On the Rocks</H1>
        </StyledLink>

        {!isAuthenticated && (
          <Container>
            <LoginButton />
          </Container>
        )}
        {isAuthenticated && (
          <>
            <SideWrap>
              <Container>
                <LogoutButton />
              </Container>
              <Container>
                <StyledLink to={`/profile/${user.sub}`}>
                  <span></span>
                  <Span>Profile</Span>
                </StyledLink>
              </Container>
            </SideWrap>
          </>
        )}
      </Banner>
    </Wrapper>
  );
};

const SideWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
`;

const Blank = styled.div`
  height: 60%;
`;

const Banner = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40%;
  background-color: var(--color-red);
  border-bottom: 3px solid var(--color-grey);
  border-top: 3px solid var(--color-grey);
`;

const IMG = styled.img`
  width: 100px;
  padding: 0px;

  border-radius: 50%;
`;

const Span = styled.span`
  color: var(--color-almond);
`;

const Wrapper = styled.header`
  height: 250px;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;

  align-items: center;
`;

const H1 = styled.h1`
  color: var(--color-almond);
  position: relative;
  font-family: "Lobster", cursive;
  font-size: 70px;
  font-weight: bold;
  right: 15px;
  text-decoration: underline;
`;

const Container = styled.div`
  margin-left: 30px;
`;

export default Header;
