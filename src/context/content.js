import React from 'react'
import { useState, useEffect } from 'react'
import Container from './container'
import Sidebar from './sidebar'

const Content = () => {
    const [loading, setLoading] = useState(false);
    const [done,setDone]=useState(false);
    const [first, setfirst] = useState([])
    const [modlist, setModlist] = useState([])
    const [orderList, setOrderList] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('https://public.connectnow.org.uk/applicant-test/')
            .then((response) => response.json())
            .then((actualData) => {
                setfirst(actualData)
                setModlist(actualData)
                setLoading(false)
            })
            

            .catch((err) => {
                console.log(err.message);
            });
    }, []);



    const modifyList = (name, score, order, sort) => {

        let list = first

        // setOrderList(sort)

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
                if (a.name > b.name) {
                    return 1;
                  }
                  if (a.name < b.name) {
                    return -1;
                  }
                  return 0;
            })
   
        }}

        if (sort === true){
            console.log('reversed', orderList)
            list = list.reverse()
        }
        setModlist(list)
    }

    return (
        <div>

        { !loading  
            ? <div className='flex flex-row space-x-10' >
            <Sidebar modifyList={modifyList} 
            setOrderList={setOrderList}
            orderList={orderList}/>
            <Container array={modlist} />

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