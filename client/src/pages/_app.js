// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';

// common styling
import '../styles/main.scss';

import Home from './index';
import Details from './details';
import Progress from './progress';
import Projects from './projects';
import NotFound from './not-found';

// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/base/_variables.scss');
// Require sass variables using sass-extract-loader and specify the plugin

const ReactApp = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Router history={createBrowserHistory()}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/details" exact component={Details} />
                        <Route path="/progress" exact component={Progress} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="" component={NotFound} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default ReactApp;
