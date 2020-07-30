import React, { Component } from "react";

import RRButton from "../components/RRButton";

export default class Screenshots extends Component {
    render() {
        return (
            <div className="snakeout-screenshots">
                <div align="center">
                    <img src="http://i.imgur.com/QHHm5Ri.png" width={222} />
                    <img src="http://i.imgur.com/xEGpyR1.png" width={222} />
                    <img src="http://i.imgur.com/APJiF8d.png" width={222} />
                    <img src="http://i.imgur.com/XdtBG7h.png" width={222} />
                </div>
                <br />
                <div className="text-center">
                    <RRButton path="/">Back to Snakeout</RRButton>
                </div>
            </div>
        );
    }
}
