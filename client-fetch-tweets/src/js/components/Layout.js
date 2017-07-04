import { connect } from 'react-redux';
import React from "react";

import { fetchTweetsByQuery } from '../actions/index';
import LayoutInner from './LayoutInner';

@connect(({tweets, search_metadata, fetched: tweetsFetched, fetching}) => {
    return {
        tweets,
        search_metadata,
        tweetsFetched,
        fetching
    };
})
export default class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: ''
        }
    }
    loadMore = () => {
        const { search_metadata, dispatch } = this.props
        if (search_metadata && search_metadata.hasOwnProperty('next_results')) {
            const nextParams = search_metadata.next_results;
            dispatch(fetchTweetsByQuery(nextParams, false));
        }
    }

    fetchTweets = (params) => {
        const { dispatch } = this.props;

        dispatch(fetchTweetsByQuery(params, true));
    }

    handleClickSearch = () => {
        const { searchQuery } = this.state
        this.fetchTweets(`?q=${searchQuery}`);
    }

    handleChangeSearchQuery = e => {
        this.setState({
            searchQuery: e.target.value
        });
    }

    handleSearchBarKeyPress = e => {
        if (e.keyCode === 13 && e.target.value)
            this.handleClickSearch();
    }

    render() {
        return <LayoutInner
                {...this.props}
                {...this.state}
                onClickSearch={this.handleClickSearch}
                onChangeSearchQuery={this.handleChangeSearchQuery}
                onSearchBarKeyPress={this.handleSearchBarKeyPress}
                loadMore={this.loadMore} />
    }
}