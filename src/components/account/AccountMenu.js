import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  FontIcon,
  AccessibleFakeButton,
  IconSeparator,
  DropdownMenu,
  Button,
  ListItem
} from 'react-md';

import { withMainComponent } from '../hoc';

const AccountMenu = ({ simplifiedMenu, polls, username, image, signout, resetAll, handleSignout }) => {
  return (
    <DropdownMenu
      id='account-menu'
      menuItems={[<ListItem key="signout" style={{fontSize: 16}} primaryText="Signout" onClick={signout} />]}
      anchor={{
        x: DropdownMenu.HorizontalAnchors.RIGHT,
        y: DropdownMenu.VerticalAnchors.BOTTOM,
      }}
      position={DropdownMenu.Positions.BELOW}
      animationPosition="below"
      sameWidth
      simplifiedMenu={simplifiedMenu}
    >
      <AccessibleFakeButton
        component={IconSeparator}
        iconBefore
        label={
          <IconSeparator label={username} style={{ fontSize: 18, marginTop: -2 }}>
            <FontIcon>arrow_drop_down</FontIcon>
          </IconSeparator>
        }
      >
      </AccessibleFakeButton>
    </DropdownMenu>
  );
}

AccountMenu.propTypes = {
  simplifiedMenu: PropTypes.bool,
  polls: PropTypes.arrayOf(PropTypes.object),
  username: PropTypes.string,
  image: PropTypes.string,
  signout: PropTypes.func.isRequired,
  handleSignout: PropTypes.func.isRequired
};

export default withMainComponent(AccountMenu);
