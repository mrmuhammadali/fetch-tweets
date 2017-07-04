import React from "react";

export default class Tweet extends React.Component {

    render() {
        return (
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-8">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-sm-1">
                                    <img class="img-circle" src={this.props.user.profile_image_url} />
                                </div>
                                <div class="col-sm-11">
                                    <h5 class="username"><b>{ this.props.user.name }</b> @{ this.props.user.screen_name }</h5>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            { this.props.text }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}