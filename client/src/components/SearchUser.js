import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Results from "./Results";
import Pagination from "./Pagination";

const SearchUser = () => {
  const [username, setUsername] = useState();
  const [viewResults, setViewResults] = useState(false);
  let history = useHistory();

  const handleChange = (ev) => {
    setUsername(ev.target.value);
  };

  const handleClick = (ev) => {
    history.push(`/user/find/${username}`);
  };

  return (
    <>
      <Wrapper>
        <Form>
          <Search>
            <Input
              placeholder="Search users by nickname..."
              onChange={handleChange}
            />
            <Searchbutton onClick={handleClick}>Search</Searchbutton>
          </Search>
        </Form>
      </Wrapper>
    </>
  );
};

const Form = styled.form``;

const Search = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 80%;
  height: 20px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top: 1px solid var(--color-grey);
  border-left: 1px solid var(--color-grey);
  border-bottom: 1px solid var(--color-grey);
  border-right: none;
  background: none;
  color: var(--color-grey);
  outline: none;
`;
const Searchbutton = styled.button`
  width: 20%;
  height: 42px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background: var(--color-black);
  border: 1px solid var(--color-almond);
  color: var(--color-almond);
  font-size: 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover {
    background: var(--color-almond);
    color: var(--color-black);
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default SearchUser;
