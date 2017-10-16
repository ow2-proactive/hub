import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { Link } from 'react-router-dom'

const TagItem = ({ tag, selectedTag }) => {
    if (tag === selectedTag || (selectedTag === null && tag === "All")) {
        return (
            <li className="nav-item">
                <Link className="nav-link active" to={{ pathname: '/', search: queryString.stringify({ tag: tag }) }}>{tag}</Link>
            </li>
        );
    } else {
        return (
            <li className="nav-item">
                <Link className="nav-link" to={{ pathname: '/', search: queryString.stringify({ tag: tag }) }}>{tag}</Link>
            </li>
        )
    }
};

const PackageNav = ({ mainTags, selectedTag }) => {
    if (selectedTag !== null && !mainTags.includes(selectedTag)) {
        mainTags.unshift(selectedTag);
    }
    let tagItems = [];
    mainTags.forEach((tag) => {
        tagItems.push(
            <TagItem key={tag} tag={tag} selectedTag={selectedTag}  />
        )
    });
    return (
        <ul className="nav justify-content-end col-md-10 mb-4">
            {tagItems}
        </ul>
    )
};

PackageNav.propTypes = {
    selectedTag: PropTypes.string,
    mainTags: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
};

export default PackageNav
