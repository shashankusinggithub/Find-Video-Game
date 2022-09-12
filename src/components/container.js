import React from 'react'
import "./container.css"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal, Pagination, PaginationItem, PaginationLink } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const Container = () => {
    const [pages, setPages] = useState([0])
    const [active, setActive] = useState(1)


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const tempList = useSelector((state) => {
        console.log(state.games)
        return (state.games.Alllist)
    })

    const [items, setItems] = useState(tempList.slice(0, 4))

    useEffect(() => {
        let p = Math.ceil(tempList.length / 5)
        const arr = Array.from(Array(p), (_, index) => index + 1)

        setPages(
            arr
        )
        changePages(1)


    }, [tempList])

    const changePages = (page) => {

        if (page > 0 && page < pages.length + 1) {
            setActive(page)
            console.log(tempList.slice(page-1 , page+4))
            setItems(tempList.slice(page-1 , page+4))
        }
    }

    const convrt = (code) => {
        let date = new Date(code);
        let [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        // console.log(`${year}-${month}-${day}`)
        return (
            `${year}-${month}-${day}`
        )
    }

    return (
        <div className='mainContent mt-6 z-0'>
            <div style={{
                display: 'block', width: 700, padding: 30
            }}>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink previous href="#"
                            onClick={() =>
                                changePages(active - 1)}

                        >

                        </PaginationLink>
                    </PaginationItem>


                    {pages.map(page => (
                        <PaginationLink href="#" onClick={() =>
                            {console.log(page)
                            return changePages(page)}
                            // setItems(tempList.slice(page-1, page+4))
                        }>
                            {page}
                        </PaginationLink>

                    ))}

                    <PaginationItem>
                        <PaginationLink next href="#"
                            onClick={() =>
                                changePages(active + 1)}
                        />
                    </PaginationItem>
                </Pagination>
            </div >

            {
                items.map(name => {
                    
                    console.log(name, items)
                    return (
                    <>
                        <Modal  isOpen={modal} toggle={toggle}  size="lg" centered={true}>
                            <ModalHeader toggle={toggle}>GAME TITLE</ModalHeader>
                            <ModalBody >
                                <div className='card-container' onClick={{toggle}}>
                                    <div className="card-img truncate "></div>
                                    <div className='about'>
                                        <h2>{name.name}</h2>
                                        <h3 className='-mt-3'> Release Date: {convrt(name.first_release_date)}</h3>
                                        <p className='para'>{name.summary}</p>
                                    </div>
                                    <div>
                                        <h2 className='score'>{parseInt(name.rating) / 10}</h2>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={toggle}>
                                    Do Something
                                </Button>{' '}
                                <Button color="secondary" onClick={toggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                        <div className='card-container  ' onClick={toggle}>
                            <div className="card-img truncate "></div>
                            <div className='about'>
                                <h2>{name.name}</h2>
                                <h3 className='-mt-3'> Release Date: {convrt(name.first_release_date)}</h3>
                                <p className='para'>{name.summary}</p>
                            </div>
                            <div>
                                <h2 className='score'>{parseInt(name.rating) / 10}</h2>
                            </div>
                        </div>
                    </>
                )})
            }


        </div >

    )
}

export default Container