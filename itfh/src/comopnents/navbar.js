import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <h1>TFSH</h1>
                <nav>
                    <Link to="/home">Invoices</Link>
                    <Link to="/offer">Expenses</Link>
                </nav>
            </div>
        )
    }
}

export default NavBar