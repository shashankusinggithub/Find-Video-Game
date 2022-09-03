import React from 'react'
import { useState, useEffect } from 'react'
import Container from './container'
import Sidebar from './sidebar'

const Content = () => {
    const [loading, setLoading] = useState(false);

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