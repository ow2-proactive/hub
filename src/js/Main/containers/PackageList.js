import { connect } from 'react-redux'
import { selectTag, searchInput, selectDownloadOptions } from "../actions/index"
import PackageCards from '../components/PackageCards'
import queryString from 'query-string'

const mapStateToProps = (state, ownProps) => {
    if (state.packages === undefined) {
        return {
            isFetching: false,
            items: [],
        }
    }

    let packages = [];
    Object.keys(state.packages.items).map((key, index) => {
        packages.push(state.packages.items[key]);
    });

    /* Filter by tag via the tag link */
    const selectedTag = queryString.parse(location.search).tag === undefined ? null : queryString.parse(location.search).tag;
    if (selectedTag !== null && selectedTag !=="All") {
        packages = packages.filter((pack) => {
            if (pack.metadata.tags === undefined) {
                return false;
            }
            return pack.metadata.tags.includes(selectedTag);
        });
    }

    /* Filter by name or short_description or tag via the search bar*/
    if (state.searchTerm !== null) {
        let searchTrimmed = state.searchTerm.trim();
        // console.log("searchTrimmed: ["+searchTrimmed+"]");
        packages = packages.filter((pack) => {

            if (pack.metadata.name !== undefined && pack.metadata.name.search(new RegExp(searchTrimmed, "i")) !== -1) {
                return true;
            }
            if (pack.metadata.short_description !== undefined && pack.metadata.short_description.search(new RegExp(searchTrimmed, "i")) !== -1) {
                return true;
            }
            if (pack.metadata.tags !== undefined) {
                for (let i = 0; i < pack.metadata.tags.length; i++) {
                    if (pack.metadata.tags[i].search(new RegExp(searchTrimmed, "i")) !== -1){
                        return true;
                    }
                }
                return false;
                // console.log("pack ["+pack.metadata.name+"], tags: ["+pack.metadata.tags.toString()+"], isMatch: ["+isMatch+"]");
            }
            return false;
        });
    }

    /* Sort packages */
    packages.sort(function (a, b) {
        const nameA = a.metadata.name.toLowerCase(), nameB = b.metadata.name.toLowerCase();
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0 //default return value (no sorting)
    });

    return {
        isFetching: state.packages.isFetching,
        items: packages,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDownloadOptionsSelection: (value) => {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Hub Download',
                eventAction: 'Package',
                eventLabel: value
            });
            dispatch(selectDownloadOptions(value))
        },
        onFilterClick: (event, tag) => {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Hub Filter',
                eventAction: 'Tag Selection',
                eventLabel: tag
            });
        },
        onClickOutboundLink: (event, repoLink) => {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Hub Outbound Link',
                eventAction: 'Click',
                eventLabel: repoLink
            });
        }
    }
};

const PackageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageCards);

export default PackageList;
