import React, { useEffect, useState }from 'react';
import Header from '../../components/Header';
import ListCommic from '../../components/ListCommics';
import MenuLeft from '../../components/MenuLeft';
import {Container, Box} from './styles';
import service from '../../service';

const Homepage = () => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const loadAll = async () => {
            //pegando a lista total 
            let list = await service.getHomeList();
            setMovieList(list);
        }
        loadAll();
    }, []);
    return (
        <Container>  
            <MenuLeft />  
           
            <Box>
            <Header/>
            {movieList.map((item, key) => (
            <ListCommic
                key={key}
                title={item.title}
                items={item.items}
                />  
            ))}
            </Box>        
                   
        </Container>
    )
}
export default Homepage