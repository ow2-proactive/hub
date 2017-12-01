import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import { Link } from 'react-router-dom'

const TagItem = ({ tag, selectedTag, onClick }) => {
    const navLinkClass = tag === selectedTag || (selectedTag === null && tag === "All") ? "nav-link active" : "nav-link";
    return (
        <li className="nav-item">
            <Link className={navLinkClass} to={{ pathname: '/', search: queryString.stringify({ tag: tag }) }} onClick={(event) => onClick(event, tag)}>{tag}</Link>
        </li>
    )
};

const PackageNav = ({ mainTags, selectedTag, onFilterClick }) => {
    if (selectedTag !== null && !mainTags.includes(selectedTag)) {
        mainTags.unshift(selectedTag);
    }
    let tagItems = [];
    mainTags.forEach((tag) => {
        tagItems.push(
            <TagItem key={tag} tag={tag} selectedTag={selectedTag} onClick={onFilterClick}  />
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
    onFilterClick: PropTypes.func.isRequired
};

export default PackageNav
