import react from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import {Container, PointList, List, Item  } from './styles'

const MenuLeft = () => {
    return (
        <Container>
            
            <List>
               <Item> <HomeIcon style={{fontSize:30}}/><PointList>Home</PointList></Item>
               <Item> <FavoriteIcon style={{fontSize:30}}/><PointList>Favoritos</PointList></Item>
               <Item> <StarIcon style={{fontSize:30}}/><PointList>Novidades</PointList></Item>
               <Item> <CloudDownloadIcon style={{fontSize:30}}/><PointList>Download</PointList></Item>
            </List>
            
        </Container>
    )
}
export default MenuLeft;