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
            <PackageCard key={item.metadata.slug} {...item.metadata}
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
            metadata: PropTypes.shape({
                slug: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                short_description: PropTypes.string.isRequired,
                author: PropTypes.string.isRequired,
                tags: PropTypes.arrayOf(PropTypes.string),
                repo_url: PropTypes.string.isRequired,
                version: PropTypes.string.isRequired
            }).isRequired,
            catalog: PropTypes.shape({
                bucket: PropTypes.string.isRequired,
                userGroup: PropTypes.string.isRequired,
                objects: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        metadata: PropTypes.shape({
                            kind: PropTypes.string.isRequired,
                            commitMessage: PropTypes.string.isRequired,
                            contentType: PropTypes.string.isRequired,
                            tags: PropTypes.arrayOf(PropTypes.string)
                        }).isRequired
                    }).isRequired
                )
            }).isRequired
        }).isRequired
    ).isRequired,
    onDownloadOptionsSelection: PropTypes.func.isRequired,
    onFilterClick: PropTypes.func.isRequired,
    onClickOutboundLink: PropTypes.func.isRequired
};

export default PackageCards
