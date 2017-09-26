import React from 'react'
import PropTypes from 'prop-types'
import PackageCard from './PackageCard'

const PackageSearch = ({ onSearch, searchTerm }) => {
  searchTerm = '';

    return (
      <div className="col-md-3 col-s-3">
            <form className ="search-form"
              onChange={e => {
                e.preventDefault()
                onSearch(searchTerm.value)
              }}
              >
            <image className="glyphicon glyphicon-search"/>
              <input className="search-input" placeholder="Search" type="text"
                ref={node => {
                  searchTerm = node
                }}
              />
            </form>
      </div>
    )
};
PackageSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
};

export default PackageSearch
