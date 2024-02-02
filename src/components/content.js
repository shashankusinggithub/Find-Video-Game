import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Container from './container';
import Sidebar from './sidebar';
import {initiateData} from '../features/games/gamesSlice';

const Content = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.rawg.io/api/games?key=8cf7b7364ad342d2802149d149f81776&search=${search}`)
            .then((response) => response.json())
            .then((actualData) => {
                dispatch(initiateData(actualData));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [search]);

    return (
        <div>
            <div className="flex flex-row space-x-10 p-10">
                <Sidebar setSearch={setSearch} />
                {!loading ? (
                    <>
                        <Container search={search} />
                    </>
                ) : (
                    <div>
                        <div className="loading">
                            <h2> PLEASE WAIT LOADING VIDEO GAMES....</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Content;
