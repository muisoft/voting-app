import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, CardTitle, Button, CardActions, Avatar, FontIcon, Checkbox } from 'react-md';
import Chart from './Chart';
import { withMainComponent } from '../hoc';

const PollChart = ({ _id, answers, question, selectPoll, editPoll, deletePoll, type }) => {
    const style = { maxWidth: 800, borderRadius: 5, marginBottom: 5 };
    const deleteButton = () => {
        return (
            <CardActions style={{ marginBottom: 0, paddingBottom: 0 }}>
                <Button icon tooltipLabel="Delete this Poll" onClick={() => deletePoll(_id)}>close</Button>
            </CardActions>
        );
    }
    const chartProps = {
        chart1: "chart",
        height: "15",
        answers: answers
    }
    let selectedPoll = { id: _id, question: question, answers: answers };
    return (
        <Card style={style} className="md-block-centered">
            {type === "mypolls" ? deleteButton() : ''}
            <CardTitle
                title={question}
                expander
            />
            <div expandable="true" className="poll-chart">
                <Chart { ...chartProps } />
                <div className="poll-button">
                    <Button
                        raised
                        primary
                        onClick={() => { type === "mypolls" ? editPoll(selectedPoll) : selectPoll(selectedPoll) }}>
                        {type === "mypolls" ? 'Edit Vote' : 'Check Vote'}
                    </Button>
                </div>

            </div>
        </Card>
    );
}

PollChart.propTypes = {
    selectPoll: PropTypes.func.isRequired,
    editPoll: PropTypes.func.isRequired,
    deletePoll: PropTypes.func.isRequired,
    type: PropTypes.string
}

export default withMainComponent(PollChart);