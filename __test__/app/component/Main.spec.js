// __tests__/TestExample.js
"use strict";

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import chai from "chai";

import Main from "app/component/Main";

describe("Main.js", () => {

    const component = TestUtils.renderIntoDocument(
        <Main
            value = "World"
        />
    );

    it("Main->prop", () => {
        chai.assert.equal(component.props.value,"World");

    });
    it("Main->content", () => {
        var input = ReactDOM.findDOMNode(component);
        chai.assert.equal(input.textContent,"Hello World");
    });

});
