import React from 'react';
import { NavLink } from 'react-router-dom';

export default function smurfNav() {
    return (
        <div>
            <NavLink to='/'>Smurfs</NavLink>
            <NavLink to='/smurf-form'>Create Smurf</NavLink>
        </div>
    )
}
