import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { FiChevronLeft, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: ${theme.spacings.xsmall} 0;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  background: ${theme.colors.white};
  z-index: ${theme.layers.menu};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;

  > a {
    height: 30px;
  }

  @media (max-width: 1140px) {
    max-width: 912px;
  }

  @media (max-width: 912px) {
    max-width: 684px;
  }

  @media (max-width: 684px) {
    max-width: 456px;
  }

  @media (max-width: 456px) {
    max-width: 228px;
  }
`;

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export const GoBackButton = styled.button<ButtonTypes>`
  border: none;
  background: none;
`;

export const LogoTMDB = styled(Link)`
  img {
    height: 3rem;
  }

  @media (max-width: 684px) {
    display: none;
  }
`;

export const GoBack = styled(FiChevronLeft)`
  cursor: pointer;
  color: ${theme.colors.secondary};
  transition: transform ${theme.transition.default};

  &:hover {
    transform: translateX(-1rem);
  }
`;

export const Form = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;

  @media (max-width: 1140px) {
    max-width: 456px;
  }

  @media (max-width: 912px) {
    max-width: 342px;
  }

  @media (max-width: 684px) {
    max-width: 456px;
  }

  @media (max-width: 456px) {
    max-width: none;
  }

  input {
    flex: 1;
    height: 50px;
    font-size: ${theme.sizes.medium};
    padding: 0 ${theme.spacings.small};
    border: 2px solid ${theme.colors.light};
    border-top-left-radius: ${theme.spacings.xxsmall};
    border-bottom-left-radius: ${theme.spacings.xxsmall};
    color: ${theme.colors.primary};

    @media (max-width: 456px) {
      padding: 0 ${theme.spacings.xsmall};
      font-size: ${theme.sizes.xsmall};
      border-radius: ${theme.spacings.xxsmall};
    }

    &:hover {
      box-shadow: 1px 1px 1px ${theme.colors.light};
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80px;
  height: 50px;
  flex: 1;
  font-family: ${theme.font.quicksand};
  font-size: ${theme.sizes.medium};
  font-weight: ${theme.font.bold};
  border-top-right-radius: ${theme.spacings.xxsmall};
  border-bottom-right-radius: ${theme.spacings.xxsmall};
  background: linear-gradient(${theme.colors.gradient});
  color: ${theme.colors.white};

  transition: background-color 0.5s;

  &:hover {
    background: linear-gradient(82deg, #39e6d7 0%, #02b4e4 100%);
  }

  @media (max-width: 912px) {
    max-width: 54px;
  }

  @media (max-width: 456px) {
    display: none;
  }
`;

export const IconSearch = styled(FiSearch)``;
