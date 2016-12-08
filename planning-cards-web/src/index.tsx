import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { PCToolbar } from "./components/PCToolbar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <PCToolbar />
    </MuiThemeProvider>,
    document.getElementById("example")
);