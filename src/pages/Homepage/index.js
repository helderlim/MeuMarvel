import React from 'react';
import ListCommic from '../../components/ListCommics';

export default ({ title, items }) => {
    console.log(items.data.results);
    return (
        <div>
            <ListCommic
                items={items}
                title={title}
                />         
           
        </div>
    )
}