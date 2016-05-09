import React from "react";

import BaseComponent from "lib/core/component/BaseComponent";


class Main extends BaseComponent {
    constructor(props : Object) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    render() : string {
        return <div>Hello {this.state.value}</div>;
    }

}

module.exports = Main;
