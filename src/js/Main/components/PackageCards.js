import React from 'react'
import PropTypes from 'prop-types'
import PackageCard from './PackageCard'

const PackageCards = ({ isFetching, items, onDownloadOptionsSelection, onFilterClick, onClickOutboundLink }) => {


    if (isFetching) {
        return <p>Packages are loading...</p>
    }

    let cards = [];
    items.forEach((item) => {
        cards.push(
            <PackageCard key={item.slug} {...item}
                         onDownloadOptionsSelection={onDownloadOptionsSelection}
                         onFilterClick={onFilterClick}
                         onClickOutboundLink={onClickOutboundLink} />
        )
    });

    return (
        <div className="card-columns">
            {cards}
        </div>
      )
};

PackageCards.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            slug: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            short_description: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            repo_url: PropTypes.string.isRequired,
            version: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onDownloadOptionsSelection: PropTypes.func.isRequired,
    onFilterClick: PropTypes.func.isRequired,
    onClickOutboundLink: PropTypes.func.isRequired
};

export default PackageCards
