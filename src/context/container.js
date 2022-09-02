import React from 'react'
import "./container.css"

const Container = (props) => {
    const convrt = (code) => {
        let date = new Date(code);
        let [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        // console.log(`${year}-${month}-${day}`)
        return (
            `${year}-${month}-${day}`
        )
    }

    return (
        <div className='mainContent mt-6'>
            {props.array.map(name => (
                <div className='card-container '>
                    <div className="card-img truncate "></div>
                    <div className='about'>
                        <h2>{name.name}</h2>
                        <h3 className='-mt-6'> Release Date: {convrt(name.first_release_date)}</h3>
                        <p className='para'>{name.summary}</p>
                    </div>
                    <div>
                        <h2 className='score'>{parseInt(name.rating) / 10}</h2>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Container