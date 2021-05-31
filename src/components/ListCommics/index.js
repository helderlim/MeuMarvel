import react from 'react';
import { Container, ListArea, List, Image, Item,Subtitle, MenuLeft } from './styles';

const ListCommic = ({ title, items }) => {
    console.log(items.data.results);
    return (
        <Container>
            <h2>{title} </h2>
            <ListArea>
                <List>
                    {items.data.results.length > 0 && items.data.results.map((item, key) => (
                        <Item key={key}>
                            <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                            <Subtitle>{item.title}</Subtitle>
                        </Item>
                    ))}
                </List>
            </ListArea>



        </Container>
    )
}
export default ListCommic;