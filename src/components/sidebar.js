import React, {useState} from 'react';
import './sidebar.css';
import {update} from '../features/games/gamesSlice';
import {useDispatch} from 'react-redux';

const Sidebar = ({setSearch}) => {
    const [orderList, setOrderList] = useState(true);
    const [orderby, setOrderBy] = useState(true);
    const dispatch = useDispatch();

    const modify = (event) => {
        let score = document.getElementById('scoreValue').value;
        let order = document.getElementById('orderByInput').value;
        let actualsort = orderList;

        if (document.getElementById('scoreValue').value > 10) {
            alert('ENTER VALUES BETWEEN 1 TO 10');
            document.getElementById('scoreValue').value = null;
            modify();
        }

        if (event.target && event.target.id === 'orderByInput') {
            setOrderBy(false);
            console.log('orderby changed');
        }

        if (event.target && event.target.id === 'toggle') {
            setOrderList((bol) => !bol);
            actualsort = !actualsort;
        }

        // props.modifyList(name, score, order, actualsort)
        dispatch(update({score, order, actualsort}));
    };

    const clearAll = () => {
        document.getElementById('nameInput').value = null;
        document.getElementById('scoreValue').value = null;
        document.getElementById('orderByInput').value = '';
        setOrderList(true);
        modify();
    };

    return (
        <div className="sidebarOuter min-w-max p-6">
            <div>
                <div className="sidebar-container p-4 form-group">
                    <h3>Filter Results</h3>
                    <div className="p-2">
                        <div className="mb-3">
                            <label className="">Search Game</label>
                            <input
                                id="nameInput"
                                placeholder="Enter Name"
                                type="text"
                                className="form-control form-control-sm text-white "
                                onChange={(e) => setSearch(e.target.value)}
                            ></input>
                        </div>

                        <div className="mb-3">
                            <label>Minimum Score</label>
                            <input
                                id="scoreValue"
                                type="number"
                                placeholder="1-10"
                                className="form-control form-control-sm text-white "
                                onChange={modify}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label>Order By</label>
                            <div className=" align-items-center p-1">
                                <button id="toggle" value="btn" className="btn btn-primary mr-2" onClick={modify}>
                                    {orderList ? '↑' : '↓'}
                                </button>
                                <select id="orderByInput" className="custom-select mt-sm-2" onChange={modify}>
                                    {orderby && <option value="">----</option>}
                                    <option id="opt" value="first_release_date" className="">
                                        Release Date
                                    </option>
                                    <option id="opt" value="rating">
                                        Score
                                    </option>
                                    <option id="opt" value="name">
                                        Name
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="button-container">
                            <button type="button" className="bg-grey clear-filter-btn" onClick={clearAll}>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
