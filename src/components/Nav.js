import React from 'react';
import {Link} from 'react-router-dom';

export function Nav (){

    return(
        <ul>
            <li><Link to='/'>Back to start page</Link></li>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
    )
}