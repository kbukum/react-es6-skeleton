
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
        let text: string = this.concatText(this.state.value);
        return <div>{text}</div>;
    }
    concatText= (value: string): string => {
        return `Hello ${value}!`;
    };

}

module.exports = Main;
