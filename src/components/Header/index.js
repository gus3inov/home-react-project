import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import LeftMenu from './LeftMenu'
import { NavLink } from 'react-router-dom'

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem onClick={props.toggleClick} primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Header extends Component {
    state = {
        logged: true,
        openMenu: false
    };

    handleChange = (event, logged) => {
        this.setState({logged: !this.state.logged});
    };

    toggleMenu = () => {
        this.setState({
            openMenu: !this.state.openMenu
        })
    }

    render() {
        return (
            <div>
                <AppBar
                    title={<div className = "alt-header__logo">
                        <NavLink to = "/"><h1 className = "title">React-Blog</h1>
                            <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt=""/>
                        </NavLink>
                    </div>}
                    onLeftIconButtonClick = {this.toggleMenu}
                    iconElementLeft={ this.state.openMenu ? <IconButton className="menu-button"><NavigationClose /></IconButton> : null}
                    iconElementRight={this.state.logged ? <Logged toggleClick={this.handleChange}/> : <Login onClick={this.handleChange}/>}
                    className={this.state.openMenu ? "alt-header open" : "alt-header close"}
                />
                <LeftMenu openMenu = { this.state.openMenu } handleToggle = { this.toggleMenu }/>
            </div>
        );
    }
}

export default Header;