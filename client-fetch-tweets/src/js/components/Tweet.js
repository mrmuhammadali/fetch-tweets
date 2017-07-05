import React from "react";

const Tweet = ({ user, text }) =>
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-sm-1">
                            <img class="img-circle" src={user.profile_image_url}/>
                        </div>
                        <div class="col-sm-11">
                            <h5 class="username"><b>{ user.name }</b> @{ user.screen_name }</h5>
                        </div>
                    </div>
                </div>
                <div class="panel-body">
                    { text }
                </div>
            </div>
        </div>
    </div>

export default Tweet;