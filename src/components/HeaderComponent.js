import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Jumbotron
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggle} />
                        <NavLink to="/home" className="nav-link">
                            <NavbarBrand href="/"><img src="./assets/images/logo.png" height="30" width="41" alt="Restorante Con fusion" /></NavbarBrand>
                        </NavLink>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to="/home" className="nav-link"><i className="fa fa-home fa-lg"></i>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/menu" className="nav-link"><i className="fa fa-list fa-lg"></i>Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/about" className="nav-link"><i className="fa fa-info fa-lg"></i>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" className="nav-link"><i className="fa fa-address-card fa-lg"></i>Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;