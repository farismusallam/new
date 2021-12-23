import React from "react";
import styled from "styled-components";

import Pagination from "./Pagination";
import Results from "./Results";

const Favorites = ({ collections }) => {
  return (
    <Wrapper>
      <PageWrapper>
        <Pagination
          data={collections}
          RenderComponent={Results}
          dataLimit={10}
        />
      </PageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  background: var(--color-black);
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Favorites;
