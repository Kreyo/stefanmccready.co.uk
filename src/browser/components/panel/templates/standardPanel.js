import React from 'react';
import PropTypes from 'prop-types';

const StandardPanel = ({ children }) =>
    <div className="panel__container">
        <div className="panel__content text-center">
            {children}
        </div>
    </div>;

StandardPanel.defaultProps = {
    children: '',
};

StandardPanel.propTypes = {
    children: PropTypes.children,
};

export default StandardPanel;
