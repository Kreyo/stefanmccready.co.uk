import React from 'react';
import Panel from '../../components/panel/panel';
import Icon from '../../components/icon/icon';
import Description from '../../components/description/description';
import Imagespace from '../../components/imagespace/imagespace';
import MenuBar from '../../components/menu-bar/MenuBar';
import Menu from '../../components/menu/menu';

const imageSet = {
    mobileImage: require('../../images/face-mobile.png'),
    tabletImage: require('../../images/face-tablet.png'),
    desktopImage: require('../../images/face-desktop.png'),
};

const LandingPage = () =>
    <div>
        <MenuBar />
        <Imagespace imageSet={imageSet}>
            <h1 className="heading-medium margin-bottom-small">Stefan McCready</h1>
            <h2 className="heading-small">Designer - Developer</h2>
            <div className="icon-set">
                <Icon iconName="linkedin" link="https://www.linkedin.com/in/stefan-mccready-11507297/" setItem />
                <Icon iconName="instagram" setItem link="https://www.instagram.com/stefanmccready/?hl=en" />
                <Icon iconName="github" setItem link="https://github.com/StefanMcCready"/>
                <Icon iconName="twitter" setItem link="https://twitter.com/Stefan_McC_123"/>
             </div>
        </Imagespace>
        <Panel imgSrc={require("../../images/responsivedesign.jpg")} imgPanel>
            <h2 className="heading-small">Simply put, I make pixels do things.</h2>
            <p className="margin-top-small u-width-medium">For 6 years now I have been building user interfaces learning new things as I go along</p>
            <button className="btn btn--alternative margin-top">Download my Resume<Icon iconName="download"/></button>
        </Panel>
        <Panel modifier="alternative" imgSrc={require("../../images/responsivedesignlight.png")} imgPanel imgAlignment="left">
            <h2 className="heading-small">Simply put, I make pixels do things.</h2>
            <p className="margin-top-small u-width-medium">For 6 years now I have been building user interfaces learning new things as I go along</p>
            <button className="btn btn--standard margin-top-large">Download my Resume<Icon iconName="download"/></button>
        </Panel>
    </div>;

export default LandingPage;
