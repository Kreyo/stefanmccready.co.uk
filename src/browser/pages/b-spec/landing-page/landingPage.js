import React from 'react';
import Panel from '../../../components/panel/panel';
import NavBar from '../../../components/navbar/navbar';
import { linksList } from './constants';

const customPanelBar = (<NavBar linkArray={linksList} />);

const LandingPage = () =>
    <div>
        <Panel modifier="alternative" customBar={customPanelBar} advanceButton>
            <div className="panel__heading-set margin-bottom">
                <p className="panel__heading">DESIGNER</p>
                <p className="panel__heading">DEVELOPER</p>
                <p className="panel__heading">MENTOR</p>
            </div>
            <div className="panel__btn-set margin-top-large">
                <button className="btn btn--alternative">DOWNLOAD MY RÈSUMÈ</button>
                <button className="btn btn--alternative">CONTACT ME</button>
            </div>
        </Panel>
        <Panel modifier="standard" imgPanel imgSrc={require('../../../images/me.png')} imgAlt="Me">
            <p>Hello</p>
        </Panel>
    </div>;

export default LandingPage;
