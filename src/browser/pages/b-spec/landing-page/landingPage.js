import React from 'react';
import NavBar from '../../../components/navbar/navbar';
import { linksList } from './constants';

const LandingPage = () =>
    <div>
        <NavBar linkArray={linksList} />
    </div>;

export default LandingPage;
