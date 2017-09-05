import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ name, onTagSelection }) => (
    <a href="#"><span className="badge badge-secondary m-1" onClick={(event) => { event.preventDefault(); onTagSelection(event.target.innerHTML) }}>{name}</span></a>
);

const PackageCard = ({ slug, name, short_description, author, tags, repo_url, version, onTagSelection, onDownloadOptionsSelection }) => {
    let tagBadges = [];
    tags.forEach((tag) => {
        tagBadges.push(<Tag key={tag} name={tag} onTagSelection={onTagSelection} />)
    });
    return (
        <div className="">
            <div className="card">
                <div className="card-body">
                    <a href={repo_url} className="card-btn float-sm-right btn btn-sm btn-outline-secondary p-1 m-1" target="_blank"><img className="card-icon" src="./images/github-logo.png" alt="github logo"/></a>
                    <a href="#" onClick={(event) => { event.preventDefault(); onDownloadOptionsSelection(slug); } } className="card-btn float-sm-right btn btn-sm btn-outline-secondary p-1 m-1"><img className="card-icon" src="./images/cloud-download.png" alt="download"/></a>

                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{short_description}</p>
                    <p className="card-text">{tagBadges}</p>
                    <p className="card-text text-muted"><small>{version}</small><small className="float-sm-right">{author}</small></p>
                </div>
            </div>
        </div>
    )
};

export default PackageCard
