/* eslint-disable-line no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, FontIcon } from 'react-md';

import { withMainComponent } from '../hoc';

class EditPoll extends Component {
    constructor(props) {
        super(props);

        let choices = this.props.poll.answers;
        this.state = {
            choices: choices,
            newChoice: ''
        }
    }
    newChoiceChange (e, m) {
        const target = m.target;
        this.setState({ newChoice: target.value });
    }
    addNewChoice (e) {
        this.setState({
            choices: this.state.choices.concat({ count: 0, text: this.state.newChoice })
        });
        this.state.newChoice = '';
    }
    removeChoice(choice) {
        this.setState({ choices: this.state.choices.filter(d => d.text !== choice.text) });
    }
    
    render() {
        let { status, newPoll, updatePoll, saveNewPoll, cancelNewPoll, handleChange,
            poll, handleAnswerChange } = this.props;

        const styles = {
            save: { marginTop: 15, marginRight: 15 },
            cancel: { marginTop: 15 },
            buttonWrapper: { paddingBottom: 20 },
            section: { padding: 20, paddingTop: 2 },
            card: { height: 260, width: 500 },
            header: { textAlign: 'center' },
            largeInput: {
                height: 46,
                width: 400,
                padding: '10px 16px',
                fontSize: 18,
                lineHeight: 1.3333333,
                border: '2px solid #ccc',
                borderRadius: 6,
                backgroundImage: 'none',
                boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)'
            }
        }
        let newchoices = { id: poll.id, answers: this.state.choices };
        return (
            <div className="cards" style={{ width: 480}}>
                <div>
                    <h2>{poll.question}</h2>
                </div>
                <div style={{ height: 350, paddingBottom: 20 }}>
                    <form style={{ height: 350 }}>
                        <section>
                            <div>
                                {
                                    this.state.choices.map((choice, i) => {
                                        return (
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <TextField
                                                    id="choice"
                                                    name="choice"
                                                    value={choice.text}
                                                    block
                                                    inputStyle={styles.largeInput}
                                                    disabled="true"
                                                />
                                                <Button onClick={this.removeChoice.bind(this, choice)} style={{ width: 37, marginLeft: 15, color: 'red' }} icon>
                                                    close
                                                </Button>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <TextField
                                    id="newchoice"
                                    name="newchoice"
                                    value={this.state.newChoice}
                                    placeholder="New choice"
                                    block
                                    inputStyle={styles.largeInput}
                                    onChange={this.newChoiceChange.bind(this)}
                                /> 
                                <Button onClick={this.addNewChoice.bind(this)} style={{ width: 37, marginLeft: 15, color: 'green' }} icon>check</Button>
                            </div>
                            
                        </section>
                        <div style={styles.buttonWrapper}>
                            <Button id="save" onClick={() => updatePoll(newchoices)} raised primary style={styles.save} >Update</Button>
                            <Button id="cancel" onClick={cancelNewPoll} raised primary style={styles.cancel}>Cancel</Button>
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

EditPoll.PropTypes = {
    newPoll: PropTypes.func.isRequired,
    cancelNewPoll: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    poll: PropTypes.func,
    status: PropTypes.string.isRequired,
    updatePoll: PropTypes.func.isRequired
}

export default withMainComponent(EditPoll);