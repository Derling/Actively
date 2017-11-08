import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./router.js";

global.jQuery = require('jquery');
require('bootstrap');

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
