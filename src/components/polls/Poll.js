import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, Button, SelectionControlGroup } from 'react-md';
import Chart from './Chart';

import { withMainComponent } from '../hoc';

const getPollAnswers = (answers) => {
  console.log('PollAns: ' + JSON.stringify(answers));
  return answers.map((ans, i) => {
    return {
      label: ans.text,
      value: ans.text
    }
  })
}
const Poll = ({ poll, handleChange, partialState, submitVote, user }) => {
 
  const share = encodeURI('https://twitter.com/intent/tweet?url=https://mon-vote.herokuapp.com/&text=' + poll.question + ' | FreeCodeCamp - React Fullstack Voting App&original_referer=https://mon-vote.herokuapp.com/');
  const style = { borderRadius: 5, padding: 15 };
  const chartProps = {
    chart1: "poll",
    height: "30",
    paddingTop: "50",
    answers: poll.answers
  }
  const handleRate = (checked, changeEvent) => {
    let answer = poll.answers.filter(ans => ans.text === checked);
    let casted = {
      id: "",
      answer: {
        id: "",
        text: ""
      }
    }

    if (checked) {
      casted = {
        id: poll.id,
        answer: {
          id: answer[0]._id,
          text: answer[0].text
        }
      }
      partialState['casted'] = casted;
    }
  }
  return (
    <div className="md-grid" style={{ marginTop: 90, marginLeft: 'auto', marginRight: 'auto', paddingLeft: 40, padding: 20 }}>
      <Card style={style} className="md-cell md-cell--6">
        <CardTitle
          title={poll.question}
        />

        <form className="questions">
          <SelectionControlGroup
            id="answer"
            name="answers"
            type="radio"
            controls={getPollAnswers(poll.answers)}
            disabled={false}
            defaultValue=""
            onChange={handleRate}
          />
        </form>
        <div style={{ paddingBottom: 20 }}>
          <Button
            raised
            primary
            onClick={submitVote}>
            Submit Vote
           </Button>
          { user.username ?
          <Button
            raised
            primary
            style={{ float: 'right' }}
            target="_blank"  
            href={share}>
            Share on Twitter
           </Button>
            : '' 
          } 
        </div>
      </Card>
      <Card style={[style, { paddingRight: 5, height: 400 }]} className="md-cell md-cell--5">
        <div style={{ paddingBottom: 20 }} className="md-cell md-cell--6 polling">
          <Chart {...chartProps} />
        </div>
      </Card>
    </div>
  );
}

Poll.PropTypes = {
  poll: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  partialState: PropTypes.object.isRequired,
  submitVote: PropTypes.func.isRequired
}

export default withMainComponent(Poll);
