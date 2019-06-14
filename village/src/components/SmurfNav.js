import React from 'react';
import { Link } from 'react-router-dom';

export default function smurfNav() {
    return (
        <div>
            <Link to='/'>Smurfs</Link>
            <Link to='/smurf-form'>Create Smurf</Link>
        </div>
    )
}
