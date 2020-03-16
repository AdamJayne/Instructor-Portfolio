import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
    Home,
    Learning,
    Instruction,
    Curriculum,
    NotFound,
    Experience
} from './Views';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';


class App extends Component {
    render () {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/learning" component={Learning} />
                            <Route exact path="/instruction" component={Instruction} />
                            <Route exact path="/curriculum" component={Curriculum} />
                            <Route exact path="/experience" component={Experience} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/**" component={NotFound} />
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
