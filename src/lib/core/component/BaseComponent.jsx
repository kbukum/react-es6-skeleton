import React from "react";
import shallowCompare from "react-addons-shallow-compare";

class BaseComponent extends React.Component {

    /* eslint-disable no-useless-constructor */
    constructor(props : Object) {
        super(props);
    }

    render() : string {
        return this.props.children;
    }

    shouldComponentUpdate(nextProps : Object, nextState : Object) : boolean {
        return shallowCompare(this, nextProps, nextState);
    }
}

module.exports = BaseComponent;
