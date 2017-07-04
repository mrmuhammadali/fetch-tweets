import * as ActionTypes from '../actions'

const initialState = {
    tweets: [],
    search_metadata: {},
    fetching: false,
    error: null
};

export default function reducer(state=initialState, action) {

    switch (action.type){

        case ActionTypes.FETCH_TWEETS: {
            if (action.reset)
                state = initialState;
            return { ...state, fetching: true };
        }

        case ActionTypes.FETCH_TWEETS_FAILURE: {
            return { ...state, fetching: false, error: action.error };
        }

        case ActionTypes.FETCH_TWEETS_SUCCESS: {

            const { statuses, search_metadata } = action.payload.data;
            const tweets = [...state.tweets, ...statuses]

            return {
                ...state,
                fetching: false,
                tweets,
                search_metadata
            };
        }

        default: {
            return state;
        }
    }
}