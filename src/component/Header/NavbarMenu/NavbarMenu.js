import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";

import useFireBase from "../../hooks/useFireBase";
const NavbarMenu = () => {
    const { user, handleSignOut } = useFireBase();
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
        >
            <Container>
                <Navbar.Brand>Fun Fruits Orchard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink btnLink="/" btnName="Home"></CustomLink>
                        <CustomLink
                            btnLink="/inventory"
                            btnName="Inventory"
                        ></CustomLink>
                        <CustomLink
                            btnLink="/blogs"
                            btnName="Blogs"
                        ></CustomLink>
                    </Nav>
                    <Nav>
                        {user?.uid && (
                            <CustomLink
                                btnLink="/add"
                                btnName="Add Item"
                            ></CustomLink>
                        )}
                        {user?.uid && (
                            <CustomLink
                                btnLink="/myItem"
                                btnName="My Item"
                            ></CustomLink>
                        )}

                        {user?.uid ? (
                            <CustomLink
                                handleSignInOut={handleSignOut}
                                btnLink="/login"
                                btnName="Sign Out"
                            ></CustomLink>
                        ) : (
                            <CustomLink
                                btnLink="/login"
                                btnName="Log In"
                            ></CustomLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarMenu;
