import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

export default function AppNav() {
    return (
        <Navbar bg="dark" variant="dark">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/difficulty">
              <Nav.Link>Difficulty</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/hash-rate">
              <Nav.Link>Hash Rate</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
    )
}