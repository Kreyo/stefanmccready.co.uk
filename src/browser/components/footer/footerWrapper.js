import React from 'react';
import PropTypes from 'prop-types';
import FooterList from './footerList';

const Footer = ({ footerData, pageDate }) => {
    const legal = (footerData.legal);

    const footerSections = (
        footerData.footerSections.map((footerSection, i) =>
            <div className="col span_1_of_2">
                <FooterList listItems={footerSection.links} listHeader={footerSection.title} />
            </div>
        )
    );

    const pageLinkList = (
        footerData.pageLinks.map((pageLink, i) =>
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
    footerDate: PropTypes.arrayOf(PropTypes.object),
    date: PropTypes.string,
};

export default Footer;