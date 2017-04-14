import React from 'react';
import PropTypes from 'prop-types';

const FooterList = ({ listHeader, listItems }) => {

    const linkList = (
        listItems.map((link, i) =>
            <li><i className={`fa fa-${link.icon} margin-right-small`} /><a href={link.linkUrl}>{link.linkTitle}</a></li>
        )
    );

    return (
        <div className="footer__list margin-bottom-small">
            <h3 className="heading-small margin-bottom">{listHeader}</h3>
            <ul>
                {linkList}
            </ul>
        </div>
    );
};

FooterList.propTypes = {
    listHeader: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string),
};

export default FooterList;