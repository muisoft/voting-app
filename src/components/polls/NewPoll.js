/* eslint-disable-line no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, FontIcon } from 'react-md';

import { withMainComponent } from '../hoc';

const NewPoll = ({ status, saveNewPoll, cancelNewPoll, handleChange }) => {
    const styles = {
        save: { marginTop: 15, marginRight: 15 },
        cancel: { marginTop: 15 },
        buttonWrapper: { float: 'right' },
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

    return (
        <div className="cards" style={{ width: 480, height: 250 }}>
            <div>
                <h2>Add New Poll</h2>
            </div>
            <div>
                <form>
                    <section>
                        <TextField
                            id="question"
                            name="question"
                            placeholder='Question'
                            block
                            inputStyle={styles.largeInput}
                            onChange={handleChange}
                        />
                        <TextField
                            id="answers"
                            name="answers"
                            placeholder='Supply your choices seprated by comma(,)'
                            block
                            inputStyle={styles.largeInput}
                            onChange={handleChange}
                        />
                        <div style={styles.buttonWrapper}>
                            <Button id="save" onClick={saveNewPoll} raised primary style={styles.save}>
                                Save
                          </Button>
                            <Button id="cancel" onClick={cancelNewPoll} raised primary style={styles.cancel}>Cancel</Button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
}

NewPoll.PropTypes = {
    saveNewPoll: PropTypes.func.isRequired,
    cancelNewPoll: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default withMainComponent(NewPoll);


/**
<form>
    <section style={styles.section}>
        <TextField
            id="title"
            name="title"
            placeholder="Pic's title"
            block
            paddedBlock
            style={{borderRadius: 5}}
            onChange={handleChange}
        />
        <Divider />
        <TextField
            id="thumbnail"
            name="thumbnail"
            placeholder="Pic's url"
            block
            paddedBlock
            onChange={handleChange}
        />
        <Divider />
        <div style={styles.buttonsWrapper}>
            <Button id="save" onClick={saveNewPolls} raised primary style={styles.save} >Save</Button>
            <Button id="cancel" onClick={cancelNewPolls} raised primary style={styles.cancel}>Cancel</Button>
        </div>
    </section>
</form>
**/
