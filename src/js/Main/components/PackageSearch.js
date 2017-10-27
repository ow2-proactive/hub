import React from 'react'
import PropTypes from 'prop-types'

const PackageSearch = ({ onSearch, searchTerm }) => {
  searchTerm = '';

    return (
      <div className="col-md-2">
            <form className ="search-form has-feedback" action="javascript:void(-1)"
              onChange={e => {
                e.preventDefault();
                onSearch(searchTerm.value)
              }}
              >
              <i className="form-control-feedback glyphicon glyphicon-search"/>
              <input className="form-control" placeholder="Search" type="text"
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
    searchTerm: PropTypes.string
};

export default PackageSearch
