import React from 'react'
import "./container.css"


const Container = (props) => {



    return (
        <div className='mainContent max-h-40'>
            <h1>Container</h1>

            {props.array.map(name => (

                <div className='card-container'>
                    <div>
                    <h2>{name.name}</h2>
                    <h1> Release Date: {name.first_release_date}</h1>
                    <p className='para'>{name.summary}</p>

                    </div>
                    <div> 

                    <h2 className='score'>{parseInt(name.rating)/10}</h2>
                    </div>
                </div>

            ))}

        </div>
    )
}

export default Container