import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardActions, Button, List, ListItem, FontIcon, Divider } from 'react-md';
import { withMainComponent } from '../hoc';
import PollChart from './PollChart';

const style = { maxWidth: 800, borderRadius: 5, marginBottom: 5 };

class AllPolls extends Component {
  componentDidMount = () => {
    this.props.renderAllPolls();
  }
  render() {
    const { polls } = this.props;
    let type = "allpolls";
    return (
      <div style={{ marginTop: 80 }}>
        {
          polls.map((poll, i) => {
            let props = { ...poll, type }
            return (
              <PollChart
                key={poll._id}
                { ...props}
              />
            );
          })
        }
      </div>
    )
  }
}

AllPolls.PropTypes = {
  user: PropTypes.object,
  polls: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withMainComponent(AllPolls);
