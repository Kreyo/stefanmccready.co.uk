import React from 'react';
import Panel from '../../components/panel/panel';
import Icon from '../../components/icon/icon';
import Description from '../../components/description/description';

const LandingPage = () =>
    <div>
        <div className="bar">
            <span className="menu__trigger">Menu</span>
            <span className="resume__trigger">My Resume</span>
        </div>
        <Panel modifier="alternative" isHalf>
            <div className="text-center">
                <h1 className="heading-medium margin-bottom-small">Stefan McCready</h1>
                <h2 className="heading-small">Designer - Developer</h2>
                <div className="icon-set">
                    <Icon iconName="facebook" setItem />
                    <Icon iconName="instagram" setItem />
                    <Icon iconName="github" setItem />
                    <Icon iconName="twitter" setItem />
                </div>
            </div>
        </Panel>
        <Panel isHalf>
            <div className="container">
                <div className="section group">
                    <div className="col span_1_of_2">
                        <Description 
                            header="Who am I?"
                            text="Im a Front End developer in Leeds, currently having fun helping Sky sell some Mobile phones and build up reusuable frameworks." />
                    </div>
                    <div className="col span_1_of_2">
                        <Description
                            header="My Belief" 
                            text="Simplicity is bliss. I believe that we should strive to make things as simple as possible for both compony and customer." />
                    </div>
                </div>
            </div>
        </Panel>
        <Panel modifier="alternative" isHalf>
            <div className="text-center">
                <h1 className="heading-medium margin-bottom-small">Want to get in touch?</h1>
                <h2 className="heading-small">stefanmccready@oulook.com</h2>
            </div>
        </Panel>
    </div>;

export default LandingPage;
