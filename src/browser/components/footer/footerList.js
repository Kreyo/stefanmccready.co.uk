import React from 'react';
import PropTypes from 'prop-types';

const footerList = ({ listHeader, listItems }) => {

    const listData = (
        listItems.map((listItem, i) =>
            <li>{listItem.text}</li>
        )
    );
    
    return (
        <div className="footer__list">
            <h3 classNames="heading-small">{listHeader}</h3>
            <ul>
                {listData}
            </ul>
        </div>
    );
};

footer.propTypes = {
    listHeader: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string),
}