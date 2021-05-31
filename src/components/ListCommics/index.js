import react from 'react';

const ListCommic = ({ title, items }) =>{
    console.log(items.data.results);
    return (
        <div>
            <h2>{title} </h2>
            {items.data.results.length > 0 && items.data.results.map((item, key) => (
                <div key={key}>
                    <h2>{item.title}</h2>
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                </div>
            ))}
        </div>
    )
}
export default ListCommic;