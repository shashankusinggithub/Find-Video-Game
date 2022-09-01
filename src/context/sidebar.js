

import React from 'react'
import { useState } from 'react';
import "./sidebar.css"
const Sidebar = (props) => {
  const [selected, setSelected] = useState('');
  const [orderList, setOrderList] = useState(true);

  const toggle = (event) => {
    setOrderList(bol => !bol)
    modify()
  }
  
 const modify = (event) => {
    let name = document.getElementById("nameInput").value;
    let score = document.getElementById("scoreValue").value;
    let order = document.getElementById("orderByInput").value;
    

    props.modifyList(name, score, order, orderList)

  }
  
  

  return (
    
      <div className="sidebarOuter min-w-max p-6"><div>
        <div className="sidebar-container">
          <h3>Filter Results</h3>
          <p><label className="form-label">Name (contains)</label>
            <input id="nameInput" placeholder="Text String" type="text" className="form-input" onChange={modify}></input></p>

          <p>
            <label>Minimum Score</label>
            <input id="scoreValue" type="number" placeholder="1-10" className="form-input" onChange={modify}></input>
            </p>
          <p><label>Order By</label><div className='order' onChange={modify}><button id="toggle" value={orderList} className="sorting-btn" onClick={toggle}>{ orderList?"↓": "↑"}</button>
            <select id="orderByInput"><option value=''>Order By</option>
              <option value="first_release_date">Release Date</option>
              <option value="rating">Score</option>
              <option value="name">Name</option></select>
          </div>
          </p>

          <p className="button-container"><button type="button" className="bg-grey clear-filter-btn">Clear</button>
          </p></div></div>
      </div>
   
  )
}

export default Sidebar