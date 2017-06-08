import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Motion, spring } from 'react-motion';

import Menu from '../menu/menu';

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

        const barClassNames = classNames({
            bar: true,
            'is-anchored': isAnchored,
        })

        return (
            <div className={barClassNames}>
                <Menu />
                <button className="resume__trigger">My Résumé</button>
            </div>
        );
    }    
};

export default MenuBar;
