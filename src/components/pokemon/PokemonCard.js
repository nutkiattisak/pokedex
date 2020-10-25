import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import spinner from '../../images/spinner.gif'

const Sprite = styled.img`
    width: 5rem;
    height: 5rem;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        cursor: pointer;
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
    `;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: 500;
    &:hover,
    &:active{
        text-decoration: none;
        color: #000;
        font-weight: 500;
    }
`;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    }

    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2];
        // const pokeId = () => {
        //     const min = Math.ceil(1)
        //     const max = Math.floor(104)
        //     return Math.floor(Math.random() * (max - min + 1)) + min
        // }

        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
        this.setState({
            name, imageUrl, pokemonIndex
        })
    }
    render() {
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                    <Card className='card'>
                        <div className='card-header'>
                            {this.state.pokemonIndex}
                        </div>
                        {this.state.imageLoading ? (
                            <img
                                src={spinner}
                                style={{ width: '5em', height: '5em' }}
                                className="card-img mx-auto d-block mt-2"
                            />
                        ) : null}
                        <Sprite
                            className="card-img-top rounded mx-auto mt-2"
                            onLoad={() => this.setState({ imageLoading: false })}
                            onError={() => this.setState({ toManyRequests: true })}
                            src={this.state.imageUrl}
                            style={
                                this.state.toManyRequests ? { display: "none" } :
                                this.state.imageLoading ? null : { display: "block" }
                            }
                        />
                        {this.state.toManyRequests ? (
                            <h6 className="mx-auto">
                                <span className="badge badge-danger mt-2">To many Request</span>
                            </h6>
                        ) : null}


                        <div className='card-body mx-auto'>
                            {this.state.name.toLowerCase()
                                .split(" ")
                                .map(
                                    letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                )
                                .join(' ')}
                        </div>
                    </Card>
                </StyledLink>
            </div>
        )
    }
}
