import * as ActionType from './ActionType';

export const selectedPoll = (poll) => {
    return {
        type: ActionType.SELECT_POLL,
        poll
    }
};
export const setVoteStatus = (status) => {
    return {
        type: ActionType.VOTE_STATUS,
        status
    }
};
export const isVoteSubmited = (payload) => {
    return {
        type: ActionType.SUBMIT_VOTE,
        payload
    }
};
export const isMyPolls = (payload) => {
    return {
        type: ActionType.GET_MY_POLLS,
        payload
    }
}
export const isSuccess = (payload) => {
    return {
        type: ActionType.ON_SUCCESS,
        payload
    }
}
export const isLoading = (status) => {
    return {
        type: ActionType.ON_LOADING,
        status
    }
}
export const isError = (status) => {
    return {
        type: ActionType.ON_ERROR,
        status
    }
}
export const isSaved = () => {
    return {
        type: ActionType.IS_SAVED,
    }
}
export const isSignin = (user) => {
    return {
        type: ActionType.ON_SIGNIN,
        user
    }
}
export const resetAll = () => {
    return {
        type: ActionType.SIGN_OUT,
    }
}
export const isNotSave = () => {
    return {
        type: ActionType.IS_NOT_SAVE,
    }
}
export const isPoll = (payload) => {
    return {
        type: ActionType.SEARCH_POLL,
        payload
    }
}
export const showDialog = () => {
    return {
        type: ActionType.SHOW_DIALOG,

    }
}

export const signup = (user) => {
    return postData('/signup', user, isSignin);
}
export const signin = (user) => {
    return postData('/signin', user, isSignin);
}
export const signout = () => {
    return getData('/signout', resetAll);
}
export const addNewPoll = (payload) => {
    return postData('/savepoll', payload, isSaved);
}
export const updatePoll = (poll) => {
    return postData('/updatepoll', poll, isSaved);
}
export const deletePoll = (book) => {
    return postData('/deletepoll', book, isSaved);
}
export const getMyPolls = () => {
    return getData('/mypolls', isMyPolls);
}
export const getAllPolls = () => {
    return getData('/allpolls', isSuccess);
}
export const getPoll = (id) => {
    return getData('/poll/' + id, isPoll);
}
export const submitVote = (casted) => {
    return postData('/submitvote', casted, isVoteSubmited);
}


export const getData = (url, done) => {
    return (dispatch) => {
        // dispatch(isLoading(true));
        fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Cache': 'no-cache'
                },
                credentials: 'same-origin'
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                //  dispatch(isLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch(done(response));
            })
            .catch(() => dispatch(isError(true)))
    }
}

const postData = (url, payload, done) => {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                // dispatch(isLoading(false));
                return res;
            })
            .then(res => res.json())
            .then(res => {
                console.log('Submit: ' + JSON.stringify(res))
                dispatch(done(res))
            })
            .catch((err) => console.error(err));//dispatch(isError(true)));
    }
}

const fetchWrapper = (url, options, timeout) => {
    return new Promise((resolve, reject) => {
        fetch(url, options).then(resolve).catch(reject);

        if (timeout) {
            const e = new Error("Connection timed out");
            setTimeout(reject, timeout, e);
        }
    });
}
