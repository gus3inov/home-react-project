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
        <MenuItem primaryText="Sign out" />
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
        this.setState({logged: logged});
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
                    title="Title"
                    onLeftIconButtonClick = {this.toggleMenu}
                    iconElementLeft={ this.state.openMenu ? <IconButton><NavigationClose /></IconButton> : null}
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                    className={this.state.openMenu ? "alt-header open" : "alt-header false"}
                />
                <Toggle
                    label="Logged"
                    defaultToggled={true}
                    onToggle={this.handleChange}
                    labelPosition="right"
                    style={{margin: 20}}
                />
                <LeftMenu openMenu = { this.state.openMenu } handleToggle = { this.toggleMenu }/>
            </div>
        );
    }
}

export default Header;