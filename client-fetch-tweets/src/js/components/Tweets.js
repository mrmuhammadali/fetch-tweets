import React from "react";
import Tweet from "./Tweet";

export default class Tweets extends React.Component {

    render() {

        let TweetComponents = "";
        const { tweets } = this.props;
        if (tweets) {
            try {
                TweetComponents = tweets.map((tweet) => {
                    return <Tweet key={tweet.id} {...tweet}/>;
                });
            }
            catch (e) {
                console.log(e);
            }
        }

        return (
            <div>{ TweetComponents }</div>
        );
    }
}