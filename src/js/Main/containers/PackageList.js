import { connect } from 'react-redux'
import { selectTag, searchInput, selectDownloadOptions } from "../actions/index"
import PackageCards from '../components/PackageCards'


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

    if (state.selectedTag !== null) {
        packages = packages.filter((pack) => {
            if (pack.tags === undefined) {

                return false;
            }
            return pack.tags.includes(state.selectedTag);
        });
    }

/* Search function in: name & short_description*/
    if (state.searchTerm !== null) {
        let searchTrimmed = state.searchTerm.trim();
        // console.log(searchTrimmed);
        packages = packages.filter((pack) => {
            if (pack.name === undefined || pack.short_description === undefined) {
                return false;
            }
            if (pack.name.search(new RegExp(searchTrimmed, "i")) !== -1 || pack.short_description.search(new RegExp(searchTrimmed, "i")) !== -1) {
                return true;
            }
            if (pack.tags !== undefined && pack.tags.length > 0) {
                let isMatch = false;
                pack.tags.forEach(tag => {
                    isMatch = isMatch || tag.search(new RegExp(searchTrimmed, "i")) !== -1;
                    return isMatch;
                })
            }
            return false;
        });
    }
//    else {
//      console.log(state.searchTerm);
//      packages = packages.filter((pack) => {
//        return true;
//      }
//    );
//    }



    packages.sort(function (a, b) {
        const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
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
        onTagSelection: (value) => {
            dispatch(selectTag(value));
        },
        onSearch: (value) => {
            dispatch(searchInput(value));
        },
        onDownloadOptionsSelection: (value) => {
            dispatch(selectDownloadOptions(value))
        }
    }
};

const PackageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageCards);

export default PackageList;
