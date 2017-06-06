import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Imagespace extends Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.state = {
            isMobile: true,
            isTablet: false,
            isDesktop: false,
        };
    }

    componentWillMount() {
        const { isMobile, isTablet, isDesktop } = this.state;
        const browserWidth = window.innerWidth;

        if (browserWidth < 739) {
            this.setState({ isMobile: true });
            this.setState({ isTablet: false });
            this.setState({ isDesktop: false });
        };

        if ((browserWidth > 739) && (browserWidth < 1024)) {
            this.setState({ isMobile: false });
            this.setState({ isTablet: true });
            this.setState({ isDesktop: false });
        };

        if (browserWidth >= 1024) {
            this.setState({ isMobile: false });
            this.setState({ isTablet: false });
            this.setState({ isDesktop: true });
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize() {
        const { isMobile, isTablet, isDesktop } = this.state;
        const browserWidth = window.innerWidth;

        if (browserWidth < 739) {
            this.setState({ isMobile: true });
            this.setState({ isTablet: false });
            this.setState({ isDesktop: false });
        };

        if ((browserWidth > 739) && (browserWidth < 1024)) {
            this.setState({ isMobile: false });
            this.setState({ isTablet: true });
            this.setState({ isDesktop: false });
        };

        if (browserWidth >= 1024) {
            this.setState({ isMobile: false });
            this.setState({ isTablet: false });
            this.setState({ isDesktop: true });
        };
    }

    render() {
        const {
            imageSet,
            backgroundColour,
            children,
        } = this.props;

        let { isMobile, isTablet, isDesktop } = this.state;
        let image;

        const imagespaceColour = {
            backgroundColor: `#${backgroundColour}`,
        }

        if (isMobile) {
            image = imageSet.mobileImage
        };

        if (isTablet) {
            image = imageSet.tabletImage
        };

        if (isDesktop) {
            image = imageSet.desktopImage
        };

        const imagespaceBackground = {
            backgroundImage: `url(${image})`
        }

        return (
            <div className="imagespace-wrapper">
                <div className="imagespace" style={imagespaceColour}>
                    <div className="imagespace__background" style={imagespaceBackground}>
                        <div className="imagespace__content text-center">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

Imagespace.defaultProps = {
    backgroundColour: '000000',
}

Imagespace.propTypes = {
    background: PropTypes.string.isRequired,
    backgroundColour: PropTypes.string,
    children: PropTypes.any,
};

export default Imagespace;
