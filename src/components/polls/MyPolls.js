import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, CardActions, Button, TextField, DialogContainer, Divider } from 'react-md';
import { withMainComponent, withResponsive } from '../hoc';
import NewPoll from './NewPoll';
import EditPoll from './EditPoll';
import PollChart from './PollChart';
import NewPollDialog from './NewPollDialog';

const style = { maxWidth: 800, borderRadius: 5, marginBottom: 5 };

class MyPolls extends Component {
  componentDidMount = () => {
    this.props.renderMyPolls();
  }
  render() {
    let { status, location, user, mypolls, deletepoll, showDialog, addNewPoll } = this.props;
    let type = "mypolls";
    let otherProps = {
      label: 'Delete',
      noRate: true,
      location: location
    }
    const styles = {
      container: {
        width: 800,
        marginTop: 65
      },
      newButton: {
        marginTop: 60,
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignContent: 'flex-end'
      },
      showDialog: {
        width: 140
      }
    }
    return (
      <div className="md-grid" style={styles.container}>
        <div style={{ marginBottom: 30, marginTop: 20 }} className="new-button md-cell md-cell--12 md-cell--10-offset md-cell--9-phone-offset">
          <Button raised primary onClick={addNewPoll} style={styles.showDialog}>Add new poll</Button>
        </div>
        <div className="md-cell md-cell--12">
          {
            mypolls.map((poll, i) => {
              let props = { ...poll, type }
              return (
                <PollChart
                  key={poll._id}
                  { ...props }
                />
              );
            })
          }
        </div>
        <NewPollDialog hide={showDialog} />
      </div>
    );
  }
}

MyPolls.PropTypes = {
  user: PropTypes.object,
  mypolls: PropTypes.arrayOf(PropTypes.object),
  deletepoll: PropTypes.func.isRequired,
  showDialog: PropTypes.func.isRequired,
  renderMypoll: PropTypes.func.isRequired,
  addNewPoll: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
}

export default withMainComponent(MyPolls);
