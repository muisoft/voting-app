import React from 'react';
import { Toolbar } from 'react-md';
import ToolbarActions from './ToolbarActions';

const AppToolbar = ({ location, toolbar }) => {
    return (
        <Toolbar
            id="toolbar"
            title="Voting App"
            fixed
            titleStyle={{fontSize: 25}}
            colored
            actions={<ToolbarActions {...location} />}>
        </Toolbar>
    )
}
export default AppToolbar;
