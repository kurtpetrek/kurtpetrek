import styled, { css } from "styled-components/macro";

export const ExternalLink = styled.a(
  ({ theme }) => css`
    color: ${theme.colors.blue500};
  `
);

export const H1 = styled.h1(
  ({ theme }) => css`
    color: ${theme.colors.ink800};
    font-size: 24px;
    font-weight: 600;
  `
);

export const H2 = styled.h2(
  ({ theme }) => css`
    color: ${theme.colors.ink800};
    font-size: 18px;
    font-weight: 600;
  `
);
export const H3 = styled.h3(
  ({ theme }) => css`
    color: ${theme.colors.ink800};
    font-size: 16px;
    font-weight: 600;
  `
);

export const Text = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.ink500};
    font-size: 14px;
    line-height: 1.7;
  `
);
