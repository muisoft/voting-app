import { push } from 'react-router-redux';
import { signin, signup, signout, resetAll, getAllPolls, getMyPolls, selectedPoll,
    deletePoll, updatePoll, showDialog, addNewPoll, submitVote, setVoteStatus } from '../../../../actions';

export const mapStateToProps = ({ vote }) => {
    return {
        user: vote.user,
        poll: vote.poll,
        polls: vote.polls,
        mypolls: vote.mypolls,
        partialState: vote.partialState,
        visible: vote.dialog.visible,
        dialog: vote.dialog,
        status: vote.status,
        questionState: vote.question,
        answersState: vote.answers
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(signin(user))
        },
        signout: () => {
            dispatch(signout())
        },
        signup: (user) => {
            dispatch(signup(user))
        },
        resetAll: () => {
            dispatch(resetAll())
        },
        getAllPolls: () => {
            dispatch(getAllPolls())
        },
        getMyPolls: () => {
            dispatch(getMyPolls())
        },
        selectedPoll: (poll) => {
            dispatch(selectedPoll(poll))
        },
        submit: (vote) => {
           dispatch(submitVote(vote))
        },
        toMyPolls: () => {
            dispatch(push('/mypolls'))
        },
        toAllPolls: () => {
            dispatch(push('/'))
        },
        gotoPoll: () => {
          dispatch(push('/poll'));
        },
        updatePoll: (poll) => {
            dispatch(updatePoll(poll))
        },
        removePoll: (data) => {
            dispatch(deletePoll(data))
        },
        showDialog: () => {
            dispatch(showDialog())
        },
        addNewPoll: (payload) => {
            dispatch(addNewPoll(payload))
        },
        toLogin: () => {
            dispatch(push('/account/login'))
        },
        toPoll: () => {
            dispatch(push('/poll'))
        },
        setVoteStatus: (status) => {
            dispatch(setVoteStatus(status))
        }
    }
}
