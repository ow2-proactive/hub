import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ name, onTagSelection }) => (
    <a href="#"><span className="badge badge-secondary m-1" onClick={(event) => onTagSelection(event.target.innerHTML)}>{name}</span></a>
);

const PackageCard = ({ name, short_description, author, tags, repo_url, version, onTagSelection }) => {
    let tagBadges = [];
    tags.forEach((tag) => {
        tagBadges.push(<Tag key={tag} name={tag} onTagSelection={onTagSelection} />)
    });
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{author} - {version}</h6>
                    <p className="card-text">{short_description}</p>
                    <p className="card-text">{tagBadges}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><a href={repo_url} className="card-link">Repository</a></small>
                </div>
            </div>
        </div>
    )
};

export default PackageCard