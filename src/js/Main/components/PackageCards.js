import React from 'react'
import PropTypes from 'prop-types'
import PackageCard from './PackageCard'

const PackageCards = ({ isFetching, items }) => {
    if (isFetching) {
        return <p>Packages are loading...</p>
    }
    let cards = [];
    items.forEach((item) => {
        cards.push(
            <PackageCard key={item.name} {...item} />
        )
    });
    return (
        <div className="row">
            {cards}
        </div>
    )
};

PackageCards.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            short_description: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            repo_url: PropTypes.string.isRequired,
            version: PropTypes.string.isRequired,
            content: PropTypes.shape({

            }).isRequired,
        }).isRequired,
    ).isRequired,
};

export default PackageCards