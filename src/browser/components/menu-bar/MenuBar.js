import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Motion, spring } from 'react-motion';

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isAnchored: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const { isAnchored } = this.state;
        const scrollPosition = window.pageYOffset;
        const headerPoint = 100

        if (isAnchored && scrollPosition < headerPoint) {
            this.setState({ isAnchored: false });

        }
        if (!isAnchored && scrollPosition > headerPoint) {
            this.setState({ isAnchored: true });
        }
    }

    render() {
        const { isAnchored } = this.state;

        return (
            <Motion style={{ y: spring(isAnchored ? 0 : 75) }}>
                {({ y }) => (
                    <div 
                        className="bar"
                        style={y !== 0 ? { transform: `translateY(-${y}px)` } : { transform: 'translateY(0)' }}>
                            <span className="menu__trigger"></span>
                            <span className="resume__trigger">My Résumé</span>
                    </div>
                )}
            </Motion>
        );
    }    
};

export default MenuBar;
