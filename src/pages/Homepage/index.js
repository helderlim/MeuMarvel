import React, { useEffect, useState }from 'react';
import Header from '../../components/Header';
import ListCommic from '../../components/ListCommics';
import MenuLeft from '../../components/MenuLeft';
import {Container, Box, Loading, Image} from './styles';
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
            {movieList.length <= 0 && 
                <Loading>
                <Image src="https://steamuserimages-a.akamaihd.net/ugc/948471635620655778/092A8E2EB6F19BEADC8D3570DD7DC8432D7B6EEF/"/>
                </Loading>      
            }
        </Container>
    )
}
export default Homepage