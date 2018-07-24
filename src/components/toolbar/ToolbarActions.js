import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Avatar,
  FontIcon,
  AccessibleFakeButton,
  IconSeparator,
  DropdownMenu,
} from 'react-md';
import { Link } from 'react-router-dom';
import { AccountMenu } from '../account';
import  { withMainComponent }  from '../hoc';

const ToolbarActions = ({ toLogin, toAllPolls, toMyPolls, polls, newPoll, pathname, user }) => {
    const actions = () => {
       if (user.username ) {
            return (
                <div className="actions">
                    <Button flat  onClick={toAllPolls}>Home</Button>
                    <Button flat  onClick={toMyPolls}>My Polls</Button>
                    <AccountMenu
                        simplifiedMenu
                        username={user.username}
                        image={user.thumbnail} />

                </div>
            )
      } else {
            return (
                <div className="actions">
                  <Button flat onClick={toAllPolls}>Home</Button>
                  <Button flat onClick={toLogin}>Signin</Button>
                </div>
            )
        }
    }
    return (
        <div>
            {actions()}
        </div>
    )
}

ToolbarActions.PropTypes = {
    toLogin: PropTypes.func.isRequired,
    toAllPolls: PropTypes.func.isRequired,
    toMyPolls: PropTypes.func.isRequired,
    polls: PropTypes.arrayOf(PropTypes.object),
    newPoll: PropTypes.func,
    pathname: PropTypes.shape,
    user: PropTypes.object
}

export default  withMainComponent(ToolbarActions);
