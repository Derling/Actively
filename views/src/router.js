import React from 'react';
import MainLayout from './Pages/Main-Layout/index.js';
import {Switch ,Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainLayout} />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
