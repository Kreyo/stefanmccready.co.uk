import React from 'react';
import PropTypes from 'prop-types';
import FooterList from './footerList';

const Footer = ({ footerData, pageDate }) => {
    const legal = (footerData.legal);

    const footerSections = (
        footerData.footerSections.map((footerSection, i) =>
            <FooterList listItems={footerSection.links} listHeader={footerSection.title} />
        )
    );

    return (
        <div>
            <p>{legal}</p>
            {footerSections}
        </div>
    );
};

Footer.propTypes = {
    footerDate: PropTypes.arrayOf(PropTypes.object),
    date: PropTypes.string,
};

export default Footer;