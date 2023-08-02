import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../../Pages/style.css"

function Head() {
    const [expand, updateExpanded] = useState(false);
    const [navColor, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 25) {
            updateNavbar(true)
        } else {
            updateNavbar(false)
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar expanded={expand} fixed="top" expand="md" className={navColor ? 'sticky' : 'navbar'}>
            <Navbar.Brand className="logotext" as={Link} to="/Portfolio">
                <div className="logo"></div>
            </Navbar.Brand>

            <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav" onClick={() => {
                updateExpanded(expand ? false : "expanded");
            }}>
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
                <Nav className="ms-auto" defaultActiveKey="#home" >
                    <Nav.Item>
                        <NavLink className="nav-link" to="/Portfolio" onClick={() => updateExpanded(false)}>
                            Home
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/about" onClick={() => updateExpanded(false)}>
                            About
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/project" onClick={() => updateExpanded(false)}>
                            Projects
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/contact" onClick={() => updateExpanded(false)}>
                            Contact
                        </NavLink>
                    </Nav.Item>

                    <Button
                        onClick={() => {
                            window.open(
                                "https://drive.google.com/file/d/12wYnOzbtlyP_ct70_0r2HSCXnl-ctfvl/view?usp=sharing"
                            )
                        }} className="resumebtn">
                        <span>Resume</span>
                    </Button>
                </Nav>
            </Navbar.Collapse>

        </Navbar >
    )
}


export default Head;