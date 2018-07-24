import React from 'react';
import PropTypes from 'prop-types';
import { DialogContainer } from 'react-md';

import { withMainComponent } from '../hoc';

import NewPoll from './NewPoll';
import EditPoll from './EditPoll';

const NewPollDialog = ({ location, dialog, hide, status }) => {
    let { visible, initialFocus, focusOnMount, containFocus } = dialog;
    return (
        <DialogContainer
            id="new-polls-dialog"
            aria-describedby="speed-boost-description"
            visible={visible}
            onHide={hide}
            initialFocus={initialFocus}
            focusOnMount={focusOnMount}
            containFocus={containFocus}
            contentClassName="md-grid"
            modal
            width='auto'
            height='auto'
            style={{ backgroundColor: 'rgba(0,128,128, 0.05)' }}>
            {status === "edit" ? <EditPoll /> : <NewPoll location={location} />}
        </DialogContainer>
    );
}
NewPollDialog.propTypes = {
    dialog: PropTypes.object.isRequired,
    hide: PropTypes.func.isRequired
}

export default withMainComponent(NewPollDialog);
