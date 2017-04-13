import React from 'react';
import Panel from '../../components/panel/panel';
import SkillsBreakdown from '../../components/skills-breakdown/skillsBreakdown';
import { skillsList, breakdownCopy } from './constants';

const LandingPage = () =>
    <div>
        <Panel modifier="alternative" advanceButton iconBar>
            <h1 className="panel__heading margin-bottom margin-top-small">STEFAN MCCREADY</h1>
            <div className="panel__heading-set margin-bottom">
                <p className="panel__subheading">DESIGNER</p>
                <p className="panel__subheading">DEVELOPER</p>
                <p className="panel__subheading">MENTOR</p>
            </div>
            <div className="panel__btn-set margin-top-large">
                <button className="btn btn--alternative">DOWNLOAD MY RÈSUMÈ</button>
                <button className="btn btn--alternative">CONTACT ME</button>
            </div>
        </Panel>
        <Panel modifier="standard" advanceButton>
            <h2 className="panel__heading margin-bottom-large">HELLO | BONJOUR | 你好</h2>
            <img className="panel__image margin-bottom" src={require('../../images/stefan.png')} alt="Stefan McCready" />
            <p className="text-large panel__description margin-bottom">
                My name is Stefan and I currently work as a front-end developer at <strong>Sky in Leeds, UK</strong> and will code at every possible oppurtunity. Some say I have an addiction to it.
            </p>
        </Panel>
        <Panel modifier="alternative" advanceButton>
            <h2 className="panel__heading margin-bottom-large">THINGS I DO</h2>
            <SkillsBreakdown skillsArray={skillsList} breakdownText={breakdownCopy} />
        </Panel>
        <Panel modifier="standard" isNarrow>
            <h2 className="panel__heading margin-bottom-large">INTERESTED?</h2>
            <p className="panel__subheading panel__subheading--link margin-bottom">
                hello@stefanmccready.co.uk
            </p>
        </Panel>
        <footer>
            <div className="section group">
                <div className="col span_1_of_3 skills-breakdown__section">
                    HELLO
                </div>
                <div className="col span_1_of_3 skills-breakdown__section">
                    HELLO
                </div>
                <div className="col span_1_of_3 skills-breakdown__section">
                    HELLO
                </div>
            </div>
        </footer>
    </div>;

export default LandingPage;
