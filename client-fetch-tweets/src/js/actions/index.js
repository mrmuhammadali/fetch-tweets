import axios from 'axios';

export const FETCH_TWEETS = 'FETCH_TWEETS'
export const FETCH_TWEETS_SUCCESS = 'FETCH_TWEETS_SUCCESS'
export const FETCH_TWEETS_FAILURE = 'FETCH_TWEETS_FAILURE'

export function fetchTweetsByQuery(params, reset) {
    /*
    return {
        type: 'FETCH_TWEETS',
        payload: axios.get("http://localhost:3030/getTweets"+params)
    };
    */

    return dispatch => {
        dispatch({
            type: FETCH_TWEETS,
            reset
        })

        axios.get("http://localhost:3030/getTweets"+params)
            .then(payload => {
                dispatch({
                    type: FETCH_TWEETS_SUCCESS,
                    payload,
                    reset
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_TWEETS_FAILURE,
                    error
                })
            })
    }
}