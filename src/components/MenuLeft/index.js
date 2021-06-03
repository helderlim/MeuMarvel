import react from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { Container, PointList, List, Item, Image } from './styles'

const MenuLeft = () => {
    return (
        <Container>

            <List>
                <Item> <HomeIcon style={{ fontSize: 30 }} /><PointList>Home</PointList></Item>
                <Item> <FavoriteIcon style={{ fontSize: 30 }} /><PointList>Favoritos</PointList></Item>
                <Item> <StarIcon style={{ fontSize: 30 }} /><PointList>Novidades</PointList></Item>
                <Item> <CloudDownloadIcon style={{ fontSize: 30 }} /><PointList>Download</PointList></Item>
                <Item> <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" /><PointList>Perfil</PointList></Item>
                <Item> <HelpIcon style={{ fontSize: 30 }} /><PointList>Ajuda</PointList></Item>
                <Item> <ExitToAppIcon style={{ fontSize: 30 }} /><PointList>Sair</PointList></Item>     
            </List>

        </Container>
    )
}
export default MenuLeft;