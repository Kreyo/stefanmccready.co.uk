import React from 'react';
import Panel from '../../../components/panel/panel';
import NavBar from '../../../components/navbar/navbar';
import SkillsBreakdown from '../../../components/skills-breakdown/skillsBreakdown';
import { skillsList, breakdownCopy, linksList } from './constants';
import Footer from '../../../components/footer/footerWrapper';
import footerData from '../../../config/footerData.json';

const customPanelBar = (<NavBar linkArray={linksList} />);

const LandingPage = () =>
    <div>
        <Panel modifier="alternative" customBar={customPanelBar}>
            <div className="panel__heading-set margin-bottom">
                <p className="panel__heading">DESIGNER</p>
                <p className="panel__heading">DEVELOPER</p>
                <p className="panel__heading">MENTOR</p>
            </div>
            <p className="panel__description">
                A lot of these website seem to have some text written around this area giving a brief summary about who they are etc. Not me, I just wanted to say that you shouldnt put Pineapple on a Pizza.
            </p>
            <div className="panel__btn-set margin-top-large">
                <button className="btn btn--alternative">DOWNLOAD MY RÈSUMÈ</button>
                <button className="btn btn--alternative">CONTACT ME</button>
            </div>
        </Panel>
        <Panel modifier="standard" isNarrow imgPanel imgSrc={require('../../../images/me.png')} imgAlt="Me">
            <h2 className="panel__heading margin-bottom-large margin-top-large">HELLO | BONJOUR | 你好</h2>
            <p className="text-large panel__description margin-bottom">
                My name is Stefan and I currently work as a front-end developer at <strong>Sky in Leeds, UK</strong> and will code at every possible oppurtunity. Some say I have an addiction to it.
            </p>
        </Panel>
        <Panel modifier="alternative" isMedium>
            <h2 className="panel__heading margin-bottom-large">MY AREAS OF EXPERTISE:</h2>
            <SkillsBreakdown skillsArray={skillsList} breakdownText={breakdownCopy} />
        </Panel>
        <Panel modifier="standard" isNarrow>
            <h2 className="panel__heading margin-bottom-large">INTERESTED?</h2>
            <p className="panel__subheading panel__subheading--link margin-bottom">
                hello@stefanmccready.co.uk
            </p>
        </Panel>
        <Footer footerData={footerData.footer} />
    </div>;

export default LandingPage;
