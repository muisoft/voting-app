import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Toolbar, Button } from 'react-md';

import { MyPolls, AllPolls, Poll } from './polls';
import { Account } from './account';
import { ToolbarActions, AppToolbar } from './toolbar';
import { ProtectedRoute } from './protected';

import './style/styles.css';

class App extends Component {
    render() {
        return (
            <div style={{ height: 480 }}>
                <Route
                    render={({ location }) => (
                        <div>
                            <AppToolbar location={location} />
                            <Switch key={location.key}>
                                <Route exact path="/" location={location} component={AllPolls}/>
                                <Route path="/account/:type" location={location} component={Account} />
                                <Route path="/poll/:id" location={location} component={Poll} />
                                <Route path="/allpolls" location={location} component={AllPolls} />
                                <ProtectedRoute path="/mypolls" location={location} component={MyPolls} />
                            </Switch>
                        </div>
                    )} />
            </div>
        );
    }
}

export default App;
