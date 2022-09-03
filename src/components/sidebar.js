import React from 'react'
import "./sidebar.css"
import { update } from '../features/games/gamesSlice'
import { useDispatch } from 'react-redux'



const Sidebar = (props) => {
  const dispatch =useDispatch()

  const modify = (event) => {
    let name = document.getElementById("nameInput").value;
    let score = document.getElementById("scoreValue").value;
    let order = document.getElementById("orderByInput").value;
    let actualsort = props.orderList

    if (document.getElementById("scoreValue").value > 9){
      alert("ENTER VALUES BETWEEN 1 TO 10")
      document.getElementById("scoreValue").value  = null
      modify()

    }

    if (event.target && event.target.id === "orderByInput") {
      console.log("orderby changed")

    }

    if (event.target && event.target.id === "toggle") {
      props.setOrderList(bol => !bol)
      actualsort = !actualsort
      console.log("ordersortby changed", props.orderList, actualsort)

    }

    console.log(name, score, order, props.orderList, actualsort)
    // props.modifyList(name, score, order, actualsort)
    dispatch(update({name, score, order, actualsort}))
  }

  const clearAll = () => {
    document.getElementById("nameInput").value = null
    document.getElementById("scoreValue").value = null
    document.getElementById("orderByInput").value = ''
    props.setOrderList(true)
    modify()
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
        <p><label>Order By</label><div className='order' >
          <button id="toggle" value="btn" className="sorting-btn"
            onClick={modify}>{props.orderList ? "↑" : "↓"}</button>
          <select id="orderByInput" onChange={modify}><option value=''>Order By</option>
            <option id="opt" value="first_release_date">Release Date</option>
            <option id="opt" value="rating">Score</option>
            <option id="opt" value="name">Name</option></select>
        </div>
        </p>

        <p className="button-container"><button type="button" className="bg-grey clear-filter-btn"
          onClick={clearAll}
        >Clear</button>
        </p></div></div>
    </div>
  )
}

export default Sidebar