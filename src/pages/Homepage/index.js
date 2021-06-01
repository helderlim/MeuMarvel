import React from 'react';
import ListCommic from '../../components/ListCommics';
import MenuLeft from '../../components/MenuLeft';
import {Container, Box} from './styles';


export default ({ title, items }) => {
    return (
        <Container>  
            <MenuLeft />  
            <Box>
            <ListCommic
                items={items}
                title={title}
                />  
            </Box>        
                   
        </Container>
    )
}