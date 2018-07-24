/* eslint-disable-line no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DialogContainer, TextField, Divider, Card, Button, Snackbar } from 'react-md';

import { withMainComponent } from '../hoc';

const Test = ({ saveNewPolls, cancelNewPolls, handleChange}) => {
    const styles = {
        save: { marginTop: 15, marginRight: 15 },
        cancel: { marginTop: 15 },
        buttonWrapper: { float: 'right' },
        section: { padding: 20 },
        card: { height: 260, width: 500 },
        header: { alignSelf: 'center' },
        inputLarge: {
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
        <div style={{width: 500, height: 300}}>
            <div className="cards md-cell--8" style={styles.header}>
                <h2>Add New Poll</h2>
            </div>
            <div className="cards md-cell--center md-cell--12" >
                <form>
                    <section style={styles.section}>
                    <TextField
                        id="thumbnail"
                        name="thumbnail"
                        placeholder="Question"
                        block
                        inputStyle={styles.inputLarge}
                        onChange={handleChange}
                    />
                        <TextField
                            id="thumbnail"
                            name="thumbnail"
                            placeholder="Supply your answers seprated by comma(,)"
                            block
                            inputStyle={styles.inputLarge}
                            onChange={handleChange}
                        />
                        <div style={styles.buttonsWrapper}>
                            <Button id="save" onClick={saveNewPolls} raised primary style={styles.save} >Save</Button>
                            <Button id="cancel" onClick={cancelNewPolls} raised primary style={styles.cancel}>Cancel</Button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
}

Test.PropTypes = {
    saveNewPolls: PropTypes.func.isRequired,
    cancelNewPolls: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default withMainComponent(Test);


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
