import React from 'react'
import PropTypes from 'prop-types'
import PackageCard from './PackageCard'

const TagItem = ({ tag, selectedTag, onTagSelection }) => {
    const href = "#"+tag;
    if (tag === selectedTag || (selectedTag === null && tag ==="All")) {
        return (
            <li className="nav-item">
                <a className="nav-link active" href={href} onClick={(event) => onTagSelection(event.target.innerHTML)}>{tag}</a>
            </li>
        );
    } else {
        return (
            <li className="nav-item">
                <a className="nav-link" href={href} onClick={(event) => onTagSelection(event.target.innerHTML)}>{tag}</a>
            </li>
        )
    }
};

const PackageNav = ({ mainTags, selectedTag, onTagSelection }) => {
    if (selectedTag !== null && !mainTags.includes(selectedTag)) {
        mainTags.unshift(selectedTag);
    }
    let tagItems = [];
    mainTags.forEach((tag) => {
        tagItems.push(
            <TagItem key={tag} tag={tag} selectedTag={selectedTag} onTagSelection={onTagSelection}  />
        )
    });
    return (
        <ul className="nav justify-content-end mb-4">
            {tagItems}
        </ul>
    )
};

PackageNav.propTypes = {
    selectedTag: PropTypes.string,
    mainTags: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    onTagSelection: PropTypes.func.isRequired
};

export default PackageNav