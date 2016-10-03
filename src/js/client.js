import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/layout";

require("./../css/app.css");

let app_container = document.createElement("div");
app_container.setAttribute("id", "app");
document.body.appendChild(app_container);

const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);
