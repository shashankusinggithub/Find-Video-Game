import React from 'react'
import { useState, useEffect } from 'react'
import Container from './container'
import Sidebar from './sidebar'

const Content = () => {
    const [first, setfirst] = useState([])
    const [modlist, setModlist] = useState([])

    useEffect(() => {
        fetch('https://public.connectnow.org.uk/applicant-test/')
            .then((response) => response.json())
            .then((actualData) => {
                setfirst(actualData)
                setModlist(actualData)
            })

            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const modifyList = (name, score, order, orderList) => {

        let list = first

        console.log(order)

        if (name)        
        {list = list.filter(game => game.name.toLowerCase().includes(name.toLowerCase()) )}

        if (score){
        list = list.filter(game => game.rating > score*10)}

        if (order){
            if (order === "first_release_date"){
                list.sort((a,b)=> a.first_release_date -b.first_release_date)
            }
            else if (order === "rating"){
                list.sort((a,b)=> a.rating -b.rating)
            }
            else if (order === "name"){
                list.sort((a,b)=>{
                if (a.name > b.value) {
                    return 1;
                  }
                  if (a.value < b.value) {
                    return -1;
                  }
                  return 0;
            })
        }}

        if (orderList){
            list = list.reverse()
        }
        
        


        

        setModlist(list)

        


    }



    return (
        <div className='flex flex-row space-x-20' >
            <Sidebar modifyList={modifyList}/>
            <Container array={modlist} />

        </div>

    )
}

export default Content