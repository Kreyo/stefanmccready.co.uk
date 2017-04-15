import React from 'react';
import PropTypes from 'prop-types';
import FooterList from './footerList';

const Footer = ({ footerData }) => {
    const legal = (footerData.legal);

    const footerSections = (
        footerData.footerSections.map((footerSection) =>
            <div className="col span_1_of_2">
                <FooterList listItems={footerSection.details} listHeader={footerSection.title} />
            </div>
        )
    );

    const pageLinkList = (
        footerData.pageLinks.map((pageLink) =>
            <li className="footer__page-list__item"><a href={pageLink.linkUrl}>{pageLink.linkTitle}</a></li>
        )
    );

    return (
        <div className="footer text-center">
            <div className="footer__content padding-top">
                <div className="group section section--narrow">
                    {footerSections}
                </div>
            </div>
            <div className="footer__bar">
                <ul className="footer__page-list">
                    {pageLinkList}
                </ul>
                <p className="text-center">{legal}</p>
            </div>
        </div>
    );
};

Footer.propTypes = {
    footerData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Footer;