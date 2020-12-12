import React from "react"
import {NavLink} from "react-router-dom"

export default class NavbarTest extends React.Component {

    componentDidMount(){
        (function() {
            let subbar = document.getElementById("navbarTogglerDemo02");
            for (let navItem of document.querySelectorAll("a.nav-link")) {
              navItem.addEventListener("click", function(event) {
                subbar.classList.remove("show");
              });
            }
          })();
    }

    render() {
        const style = {
            padding: "15px"
        }
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">Visualization</NavLink>
                <button style={{border: "none", outline:"none"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink style={style} activeClassName="active" exact className="nav-link" to="/">
                                Provide Data!
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={style} activeClassName="active" exact className="nav-link" to="/allocation">
                                Allocation
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={style} activeClassName="active" exact className="nav-link" to="/aggregate">
                                Aggregate
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={style} activeClassName="active" exact className="nav-link" to="/map">
                                Map
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}