import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar: React.FC = () => (
  <StyledNavbar>
    <StyledLink to="/all-cards">All Cards</StyledLink>
    <StyledLink to="/collection">Single Card</StyledLink>
    <StyledLink to="/create-card">Create Card</StyledLink>
  </StyledNavbar>
);

export default Navbar;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
