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
            <span className="menu__trigger">Menu</span>
            <span className="resume__trigger">My Resume</span>
        </div>
        <Imagespace imageSet={imageSet}>
            <h1 className="heading-medium margin-bottom-small">Stefan McCready</h1>
            <h2 className="heading-small">Designer - Developer</h2>
            <div className="icon-set">
                <Icon iconName="facebook" setItem />
                <Icon iconName="instagram" setItem />
                <Icon iconName="github" setItem />
                <Icon iconName="twitter" setItem />
             </div>
        </Imagespace>
    </div>;

export default LandingPage;
