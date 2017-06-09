import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Motion from 'react-motion';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillmount() {
        window.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        window.addEventListener('click', this.handleClick);
    }

    handleClick() {
        let { isOpen }  = this.state;

        if (!isOpen) {
            this.setState({ isOpen: true });
        } else {
            this.setState({ isOpen: false });
        }
    }

    render() {
        const { isOpen }  = this.state;
        const menuClassNames = classNames({
            menu: true,
            'is-open': isOpen,
        });

        return (
            <div>
                <button className="menu__trigger" onClick={() => this.handleClick()}></button>
                <div className={menuClassNames}>
                    <button className="menu__close" onClick={() => this.handleClick()} />
                    <ul className="menu-list">
                        <li className="menu-list__item">About Me</li>
                        <li className="menu-list__item">Portfolio</li>
                        <li className="menu-list__item">Contact Me</li>
                    </ul>
                </div>
            </div>
        );
    }
}

Menu.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array.isRequired,
}

export default Menu;