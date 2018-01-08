import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default function LeftMenu ({ openMenu, handleToggle }) {
        return (
            <div>
                <RaisedButton
                    label="Toggle Drawer"
                    onClick={ handleToggle }
                />
                <Drawer open={ openMenu }>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
}