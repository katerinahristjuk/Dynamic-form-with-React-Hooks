import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Nav} from './Nav';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';


export function App(){

    return(
        <div id='app'>
            <h2>App</h2>
            <Nav/>

            <Switch>
                <Route path='/home' component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>

        </div>
    )
}