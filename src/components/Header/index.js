import React from 'react';
import {Container, Title, Selector, Select} from './styles'
const Header = () => {
    return(
        <Container>
            <Title>MeuMarvel.com</Title>
            <Selector>
                <Select>Series</Select>
                <Select>Commics</Select>
                <Select>Produtores</Select>
            </Selector>
        </Container>
        
    )
};

export default Header;