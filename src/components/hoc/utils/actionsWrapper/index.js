
//Here we wrap all our actions we wanted to perform on this App
export const actionsWrapper = (props) => {
    return {
        renderAllPolls: () => {
            props.getAllPolls();
        },
        renderMyPolls: () => {
            props.getMyPolls();
        },
        saveNewPoll: (e) => {
            e.preventDefault();
            //We display form for user in order to supply his data
            props.showDialog();
            // We send save new poll request through redux middleware to server, we first format our in a way 
            // we want it.
            let answers = formartAnswers(props.partialState.answers.split(','));

            props.addNewPoll({ "question": props.partialState.question, "answers": answers });
            // then alert that everything goes well
            alert('Successfully added new poll');
            // then stay on the thesame page
            // without redirecting to another page
            props.toMyPolls();
        },
        addNewPoll: () => {   
            props.showDialog();
            props.setVoteStatus('new');
        },
        cancelNewPoll: () => {
            props.showDialog();
        },
        handleChange: (e, m) => {
            const target = m.target;
            const value = target.value;
            const name = target.name;
            console.log('Checked: ' + value);
            props.partialState[name] = value;
        },
        handleAnswerChange: (e, m) => {
            const target = m.target;
            target.value = props.questionState;
            const value = target.value;
            const name = target.name;
            console.log('Checked: ' + value);
            props.questionState[name] = value;
        },
        submitVote: () => {
            let poll = props.partialState.casted;
            if (props.poll.voter === props.user._id) {
                alert('Sorry, you can only cast vote once. Try another poll.');
                return;
            }
            props.submit({ id: poll.id, answer: poll.answer, voter: props.user._id });
            alert('Vote Casted');
            props.gotoPoll();
            props.selectedPoll(props.poll);            
        },

        deletePoll: (id) => {
            props.removePoll({ id: id });
            alert('Successfully deleted');
            props.toMyPolls();
        },
        handleSignout: () => {
            props.signout();
        },
        onSignin: (e) => {
            props.login(props.partialState);
            e.preventDefault();
        },
        onSignup: (e) => {
            e.preventDefault();
            props.signup(props.partialState);
        },
        gotoMyPolls: () => {
            props.toMyPolls();
        },
        gotoAllPolls: () => {
            props.toAllPolls();
        },
        selectPoll: (poll) => {
            props.setVoteStatus('check');
            props.gotoPoll();
            props.selectedPoll(poll);
        },
        editPoll: (poll) => {
            props.setVoteStatus('edit');
            props.selectedPoll(poll);
            props.showDialog();
        },
        updatePoll: (newchoices) => {
            props.updatePoll(newchoices);
            alert('Updated Successfuly');
            props.toMyPolls();
            props.showDialog();
        }
    }
}

const formartAnswers = (answers) => {
    return answers.map((a, i) => {
        return {
            text: a,
            count: 0
        }
    });
}
const saveNewPoll = (e, props) => {
    e.preventDefault();
    //We display form for user in order to supply his data
    props.showDialog();
    // We send save new poll request through redux middleware to server, we first format our in a way 
    // we want it.
    let answers = formartAnswers(props.partialState.answers.split(','));

    props.addNewPoll({ "question": props.partialState.question, "answers": answers });
    // then alert that everything goes well
    alert('Successfully added new poll');
    // then stay on the thesame page
    // without redirecting to another page
    props.toMyPolls();
}
const editPoll = (e, poll, props) => {
    e.preventDefault();
    let question;
    if (props.poll.question !== poll.question) {
        question = poll.question;
    }
    let result = [];
    let answers = poll.answers.split(',');
    answers.map(ans => {
        if (!isAnsContain(props.poll.answers, ans)) {
            result.push({ text: ans, count: 0 });
        }
    });
    console.log('Result: ' + JSON.stringify(result));
    props.updatePoll(poll);
    alert('Poll Updated');
}
const isAnsContain = (arr, ans) => {
    return arr.some(x => x === ans);
}
