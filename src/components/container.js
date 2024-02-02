import React from 'react';
import './container.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Modal, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const Container = ({search}) => {
    const [pages, setPages] = useState([0]);
    const [active, setActive] = useState(1);

    const [modal, setModal] = useState(false);
    const [modalDetails, setModalDetails] = useState('');
    const toggle = (item = {}) => {
        setModal(!modal);
        setModalDetails(item);
    };

    const tempList = useSelector((state) => {
        return state.games.Alllist;
    });

    const [items, setItems] = useState(tempList.slice(0, 4));

    useEffect(() => {
        let p = Math.ceil(tempList.length / 5);
        const arr = Array.from(Array(p), (_, index) => index + 1);

        setPages(arr);
        changePages(1);
    }, [tempList]);

    const changePages = (page) => {
        if (page > 1 && page < pages.length + 1) {
            setActive(page);
            setItems(tempList.slice((page - 1) * 5, (page - 1) * 5 + 5));
        }
        if (page == 1) {
            setActive(page);
            setItems(tempList.slice((page - 1) * 5, page * 5));
        }
    };

    const convrt = (code) => {
        let date = new Date(code);
        let [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="mainContent mt-6 z-0 p-3">
            <h1 className="text-white">{search ? 'Search result for - ' + search : `Top Listed Games`}</h1>

            <Modal isOpen={modal} toggle={toggle} size="lg" centered={true}>
                <ModalHeader toggle={toggle}>GAME TITLE</ModalHeader>
                <ModalBody>
                    <div className="card-container align-middle px-4" onClick={{toggle}}>
                        <div className="card-img align-middle truncate ">
                            <img src={modalDetails.background_image} className="align-middle" />
                        </div>

                        <div className="about">
                            <h2>{modalDetails.name}</h2>
                            <h3 className="-mt-3"> Release Date: {convrt(modalDetails.released)}</h3>
                            <p className="para">{modalDetails.slug}</p>
                        </div>
                        <div>
                            <h2 className="score">{parseInt(modalDetails.rating * 2)}</h2>
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

            {items.map((name) => {
                return (
                    <>
                        <div className="card-container px-4 " onClick={() => toggle(name)}>
                            <div className="card-img truncate ">
                                {' '}
                                <img src={name.background_image} />{' '}
                            </div>
                            <div className="about">
                                <h2>{name.name}</h2>
                                <h3 className="-mt-3"> Release Date: {convrt(name.released)}</h3>
                                <p className="para">{name.slug}</p>
                            </div>
                            <div>
                                <h2 className="score">{parseInt(name.rating * 2)}</h2>
                            </div>
                        </div>
                    </>
                );
            })}
            <div
                style={{
                    display: 'block',
                    padding: 30,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            >
                <Pagination>
                    <PaginationItem>
                        <PaginationLink previous href="#" onClick={() => changePages(active - 1)}></PaginationLink>
                    </PaginationItem>

                    {pages.map((page) => (
                        <PaginationLink
                            href="#"
                            onClick={
                                () => {
                                    return changePages(page);
                                }
                                // setItems(tempList.slice(page-1, page+4))
                            }
                        >
                            {page}
                        </PaginationLink>
                    ))}

                    <PaginationItem>
                        <PaginationLink next href="#" onClick={() => changePages(active + 1)} />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    );
};

export default Container;
