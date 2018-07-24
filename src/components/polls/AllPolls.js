import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardTitle, CardActions, Button, List, ListItem, FontIcon, Divider } from 'react-md';
//import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
//import Masonry from 'react-masonry-component';
import Badge from './Badge';
import { withResponsive, withMainComponent }  from '../hoc';
import PollChart from './PollChart';

const style = { maxWidth: 800, borderRadius: 5, marginBottom: 5 };
const avatar = () => {}
const answers = {
    question: 'What is your lastname?',
    answer: [
        'Abiodun Abiodun Abiodun Abiodun Abiodun Abiodun Abiodun Abiodun Abiodun Abiodun',
        'Femi Abiodun Abiodun Abiodun Abiodun Abiodun Abiodun',
        'Maaruf'
    ]
}
class AllPolls extends Component {
  componentDidMount = () => {
    this.props.renderAllPolls();
  }
  render() {
    const { polls } = this.props;
    let type = "allpolls";
    return(
      <div style={{marginTop: 80}}>
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
  columnsCount: PropTypes.number,
  width: PropTypes.number.isRequired
}

export default withMainComponent(withResponsive(AllPolls));
