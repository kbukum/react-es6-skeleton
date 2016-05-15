import React from "react";
import { render } from "react-dom";
import Main from "app/component/Main";


const app = document.getElementById("app");


render((
    <Main value="World" />
), app);
