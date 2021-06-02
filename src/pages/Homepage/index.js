import React from 'react';
import Header from '../../components/Header';
import ListCommic from '../../components/ListCommics';
import MenuLeft from '../../components/MenuLeft';
import {Container, Box} from './styles';


export default ({ title, items }) => {
    return (
        <Container>  
            <MenuLeft />  
           
            <Box>
            <Header/>
            <ListCommic
                items={items}
                title={title}
                />  
            </Box>        
                   
        </Container>
    )
}