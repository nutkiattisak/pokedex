import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../images/pokemon-logo.png'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFF;
    font-weight: 500;
    &:hover,
    &:active{
        text-decoration: none;
        color: #FFF;
        font-weight: 500;
    }
`;
export default class NavBar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-md navbar-datk bg-dark fixed-top">
                <StyledLink to=""> 
                    
                    <div>
                        <img
                        src={logo}
                        style={{ width: '2em', height: '2em' }}
                        className="card-img mx-auto d-block mt-2"
                    />POKEMON API
                    </div>
                </StyledLink>
               </nav>
            </div>
        )
    }
}
