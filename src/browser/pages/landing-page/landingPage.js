import React from 'react';
import Panel from '../../components/panel/panel';
import Icon from '../../components/icon/icon';
import Description from '../../components/description/description';
import Imagespace from '../../components/imagespace/imagespace';
import MenuBar from '../../components/menu-bar/MenuBar';

const imageSet = {
    mobileImage: require('../../images/face-mobile.png'),
    tabletImage: require('../../images/face-tablet.png'),
    desktopImage: require('../../images/face-desktop.png'),
};

const LandingPage = () =>
    <div>
        <MenuBar />
        <div className="bar bar--float">
            <span className="menu__trigger"></span>
            <span className="resume__trigger">My Résumé</span>
        </div>
        <Imagespace imageSet={imageSet}>
            <h1 className="heading-medium margin-bottom-small">Stefan McCready</h1>
            <h2 className="heading-small">Designer - Developer</h2>
            <div className="icon-set">
                <Icon iconName="linkedin" setItem />
                <Icon iconName="instagram" setItem />
                <Icon iconName="github" setItem />
                <Icon iconName="twitter" setItem />
             </div>
        </Imagespace>
        <Panel modifier="alternative" isHalf>
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
    </div>;

export default LandingPage;
