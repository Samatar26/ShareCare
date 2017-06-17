import styled from 'styled-components';

export const MainContent = styled.main`
  margin: 0 auto;
  padding: 1em;
  & > * + * {
    margin-top: 1.5em;
  }
  @media (min-width: 40em) {
    padding: 2em;
  }
`;
