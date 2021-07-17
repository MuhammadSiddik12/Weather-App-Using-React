
import Home from './Home';
import Checker from './Checker';
import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import './checker.css'

const Nav = () => {
    return (
        <>
            <Router>
                <nav className="nb">
                    <Link to="/" className="text">Home</Link>
                    <br />
                    <Link to="/check" className="text"> Wheather Checker</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/check" component={Checker}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default Nav