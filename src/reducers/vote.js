import * as ActionType from '../actions/ActionType';

const initialState = {
    polls: [],
    poll: {},
    mypolls: [],
    user: {},
    isloading: false,
    iserror: false,
    partialState: {},
    question: {},
    answers: "",
    dialog: {
        visible: false,
        focusOnMount: true,
        containFocus: true,
        initialFocus: undefined
    },
    message: {},
    status: ""
}

export const vote = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ON_SUCCESS:
            return {
                ...state,
                polls: action.payload
            }
        case ActionType.ON_SIGNIN:
            return {
                ...state,
                user: action.user
            }
        case ActionType.GET_MY_POLLS:
            return {
                ...state,
                mypolls: action.payload
            }
        case ActionType.ON_ERROR:
            return {
                ...state,
                iserror: action.status
            }
        case ActionType.ON_LOADING:
            return {
                ...state,
                isloading: action.status
            }
        case ActionType.IS_SAVED:
            return {
                ...state,
                message: action.payload,
                user: action.payload.user
            }
        case ActionType.SUBMIT_VOTE:
            console.log('Submit2: ' + JSON.stringify(action.payload));
            return {
                ...state,
                poll: action.payload
            }    
        case ActionType.SHOW_DIALOG:
            return {
                ...state,
                dialog: {
                    ...state.dialog,
                    visible: !state.dialog.visible
                }
            }
        case ActionType.SELECT_POLL:
              return {
                  ...state,
                  poll: action.poll
              }
         case ActionType.VOTE_STATUS:
              return {
                  ...state,
                  status: action.status
              }      
        case ActionType.SIGN_OUT:
            return initialState;
        default:
            return state;
    }
}
export default vote;
