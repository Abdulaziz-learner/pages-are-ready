import React from "react";
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import {NavLink } from 'react-router-dom' ;

const SideBar = () => {
    return(
        <>
              <div className="side-bar">
                <ListGroup>

                    <NavLink className="nav_link_r" to='/'>
                        <ListGroupItem className="list-gitem">
                            <span>
                                <i class="fas fa-user-circle"></i>
                            </span> 
                            All Contacts
                        </ListGroupItem>
                    </NavLink>
                    <NavLink className="nav_link_r" to="/family">
                        <ListGroupItem className="list-gitem">
                            <span>
                                <i class="fa fa-house-user"></i>
                            </span> 
                            Family
                        </ListGroupItem>
                    </NavLink>
                    <NavLink className="nav_link_r" to="/friends">
                        <ListGroupItem className="list-gitem">
                            <span>
                                <i class="fas fa-user-friends"></i>
                            </span> 
                            Friends
                        </ListGroupItem>
                    </NavLink>
                    <NavLink className="nav_link_r" to="/favourites">
                        <ListGroupItem className="list-gitem">
                            <span>
                                <i class="fas fa-bookmark"></i>
                            </span> 
                            Favourites
                        </ListGroupItem>
                    </NavLink>
                </ListGroup>
            </div>
        </>
    )
}

export default SideBar;
