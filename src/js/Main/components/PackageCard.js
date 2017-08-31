import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({name}) => (
    <span className="badge badge-secondary m-1">{name}</span>
);

const PackageCard = ({ name, short_description, author, tags, repo_url, version }) => {
    let tagBadges = [];
    tags.forEach((tag) => {
        tagBadges.push(<Tag key={tag} name={tag} />)
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