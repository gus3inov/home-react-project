import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { NavLink } from 'react-router-dom'

export default function LeftMenu ({ openMenu, handleToggle }) {
    const activeStyle = '#00d8ff'
        return (
            <div>
                <Drawer className = "alt-toggle-menu" open={ openMenu }>
                    <div className = "alt-toggle-menu__header">
                        <NavLink to = "/"><h1 className = "title">React-Blog</h1>
                        <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt=""/>
                    </NavLink>
                    </div>
                    <MenuItem><NavLink activeStyle = {{ color: activeStyle }} to = "/counter">Counter</NavLink></MenuItem>
                    <MenuItem><NavLink activeStyle = {{ color: activeStyle }} to = "/articles">Articles</NavLink></MenuItem>
                </Drawer>
            </div>
        );
}