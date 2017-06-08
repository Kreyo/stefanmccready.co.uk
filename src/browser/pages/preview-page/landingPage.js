import React from 'react';
import Panel from '../../components/panel/panel';
import NavBar from '../../components/navbar/navbar';
import SkillsBreakdown from '../../components/skills-breakdown/skillsBreakdown';
import { skillsList, breakdownCopy, linksList } from './constants';
import Footer from '../../components/footer/footerWrapper';
import footerData from '../../config/footerData.json';

const customPanelBar = (<NavBar linkArray={linksList} />);

const LandingPage = () =>
    <div>
        <Panel modifier="alternative" customBar={customPanelBar}>
            <div className="panel__heading-set margin-bottom-large">
                <p className="heading-medium">DESIGNER</p>
                <p className="heading-medium">DEVELOPER</p>
                <p className="heading-medium">MENTOR</p>
            </div>
            <div className="panel__btn-set margin-top-large padding-bottom-large">
                <button className="btn btn--alternative">DOWNLOAD MY RÈSUMÈ</button>
                <button className="btn btn--alternative">CONTACT ME</button>
            </div>
        </Panel>
        <Panel modifier="standard" isNarrow imgPanel imgSrc={require('../../images/me.png')} imgAlt="Me">
            <h2 className="heading-small margin-bottom-large margin-top-large">HELLO | BONJOUR | 你好</h2>
            <p className="text-large panel__description margin-bottom-large padding-bottom-small">
                My name is Stefan and I currently work as a front-end developer at <strong>Sky in Leeds, UK</strong> and will code at every possible oppurtunity. Some say I have an addiction to it.
            </p>
        </Panel>
        <Panel modifier="alternative" isNarrow>
            <h2 className="heading-small padding-top-large margin-bottom-large">MY AREAS OF EXPERTISE:</h2>
            <div className="padding-bottom">
                <SkillsBreakdown skillsArray={skillsList} breakdownText={breakdownCopy} />
            </div>
        </Panel>
        <Panel modifier="standard" isNarrow>
            <h2 className="heading-small margin-bottom-large">INTERESTED?</h2>
            <p className="panel__subheading panel__subheading--link margin-bottom">
                hello@stefanmccready.co.uk
            </p>
        </Panel>
        <Footer footerData={footerData.footer} />
    </div>;

export default LandingPage;
