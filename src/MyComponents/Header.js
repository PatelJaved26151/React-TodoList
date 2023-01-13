import React from 'react'

export default function Header(props) {
  return (
    <div>
       <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">{props.title}</a>
          <a className="navbar-brand">Pending</a>
          <a className="navbar-brand">about</a>
         {props.searchBar? <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>: "No search bar"}
        </div>
      </nav>
    </div>
  )
}
