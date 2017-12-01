import React from 'react'
import { connect } from 'react-redux'
import { selectTag, searchInput } from "../actions/index"
import PackageSearch from '../components/PackageSearch'

const mapStateToProps = (state, ownProps) => {
    return {
        searchTerm: state.searchTerm,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearch: (value) => {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Filter',
                eventAction: 'Search',
                eventLabel: value
            });
            dispatch(searchInput(value));
        }
    }
};

const PackageSearchBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageSearch);

export default PackageSearchBar;
