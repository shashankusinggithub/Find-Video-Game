import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Container from './container'
import Sidebar from './sidebar'
import { initiateData } from '../features/games/gamesSlice'

const Content = () => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)
        fetch('https://public.connectnow.org.uk/applicant-test/')
            .then((response) => response.json())
            .then((actualData) => {
                dispatch(initiateData(actualData))
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    

    return (
        <div>

            {!loading
                ?
                <div className='flex flex-row space-x-10' >
                    <Sidebar  />
                    <Container  />
                </div>
                :
                <div className='loading'>
                    <h2 > PLEASE WAIT LOADING VIDEO GAMES....</h2>
                </div>
            }
        </div>
    )
}

export default Content