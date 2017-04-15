import React from 'react';
import PropTypes from 'prop-types';

const FooterList = ({ listHeader, listItems }) => {
    const itemList = (
        listItems.map((detail, i) => {
            if (detail.detailUrl !== undefined) {
                return (
                    <li><i className={`fa fa-${detail.icon} margin-right-small`} /><a href={detail.detailUrl}>{detail.detailTitle}</a></li>
                );
            } else {
                return (
                    <li><i className={`fa fa-${detail.icon} margin-right-small`} />{detail.detailTitle}</li>
                );
            }
        })
    );

    return (
        <div className="footer__list margin-bottom-small">
            <h3 className="heading-small margin-bottom">{listHeader}</h3>
            <ul>
                {itemList}
            </ul>
        </div>
    );
};

FooterList.propTypes = {
    listHeader: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FooterList;
