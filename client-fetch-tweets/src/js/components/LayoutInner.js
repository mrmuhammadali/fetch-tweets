/**
 * Created by muhammadali on 7/4/17.
 */

import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import SearchBar from "./SearchBar"
import Tweets from "./Tweets";

const LayoutInner = ({
                         tweets,
                         searchQuery,
                         onClickSearch,
                         onChangeSearchQuery,
                         onSearchBarKeyPress,
                         loadMore,
                         fetching,
                     }) =>
    <div class="container">
        <h1 class="text-center">Search for Twitter Feed</h1>
        <SearchBar
            searchQuery={searchQuery}
            onClickSearch={onClickSearch}
            onSearchBarKeyPress={onSearchBarKeyPress}
            onChangeSearchQuery={onChangeSearchQuery}/>
        <Tweets tweets={tweets}/>
        <InfiniteScroll class="text-center"
                        pageStart={0}
                        loadMore={loadMore}
                        hasMore={true}
                        loader={
                            fetching && (<div id="loader">
                                <div class="windows8">
                                    <div class="wBall" id="wBall_1">
                                        <div class="wInnerBall"></div>
                                    </div>
                                    <div class="wBall" id="wBall_2">
                                        <div class="wInnerBall"></div>
                                    </div>
                                    <div class="wBall" id="wBall_3">
                                        <div class="wInnerBall"></div>
                                    </div>
                                    <div class="wBall" id="wBall_4">
                                        <div class="wInnerBall"></div>
                                    </div>
                                    <div class="wBall" id="wBall_5">
                                        <div class="wInnerBall"></div>
                                    </div>
                                    <div class="wBall" id="wBall_6">
                                        <div class="wInnerBall"></div>
                                    </div>
                                </div>
                            </div>)
                        }>
        </InfiniteScroll>
    </div>

export default LayoutInner