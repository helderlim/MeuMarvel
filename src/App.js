import React, { useEffect, useState } from 'react';
import './App.css';
import service from './service';
import Homepage from './pages/Homepage/index'

const App = () => {
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
        <div className="page">
            <section className="listis">
                {movieList.map((item, key) => (
                    <Homepage key={key}
                        title={item.title}
                        items={item.items}
                    />
                ))}

            </section>
        </div>
    )
}
export default App;