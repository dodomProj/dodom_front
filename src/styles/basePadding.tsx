import styled, { css } from 'styled-components';

export const basePadding = css`
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px;
  min-width: 360px;

  @media screen and (max-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const PageBase = styled.div`
  padding-top: 100px;
`;

export const MainContent = styled.main`
  ${basePadding}
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
