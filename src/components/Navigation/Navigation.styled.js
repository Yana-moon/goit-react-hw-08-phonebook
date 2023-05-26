import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkActive = styled(NavLink)`
  padding: 8px 15px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 700;

  &.active {
    color: #6a08c2;
    background-color: #fcf797;
  }
`;