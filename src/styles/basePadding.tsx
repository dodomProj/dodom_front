import styled, { css } from 'styled-components';

export const basePadding = css`
  padding-left: 7rem;
  padding-right: 7rem;

  @media screen and (max-width: 1056px) {
    padding-left: 1.7rem;
    padding-right: 1.7rem;
  }
`;

export const PageBase = styled.div`
  padding-top: 100px;
`;

export const MainContent = styled.main`
  ${basePadding}
  padding-top: 5rem;
`;
