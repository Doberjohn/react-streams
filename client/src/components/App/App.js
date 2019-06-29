import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../../history';
import Header from "../Header/Header";
import StreamCreate from "../Streams/StreamCreate/StreamCreate";
import StreamEdit from "../Streams/StreamEdit/StreamEdit";
import StreamDelete from "../Streams/StreamDelete/StreamDelete";
import StreamList from "../Streams/StreamList/StreamList";
import StreamShow from "../Streams/StreamShow/StreamShow";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList}></Route>
                        <Route path="/streams/new" exact component={StreamCreate}></Route>
                        <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
                        <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
                        <Route path="/streams/:id" exact component={StreamShow}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;