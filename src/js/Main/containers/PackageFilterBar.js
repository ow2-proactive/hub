import { connect } from 'react-redux'
import { selectTag } from '../actions/index'
import PackageNav from '../components/PackageNav'
import queryString from 'query-string'

const mapStateToProps = (state, ownProps) => {
    if (state.packages === undefined) {
        return null;
    }

    const mainTags = ["All", "Artificial Intelligence", "Big Data", "Service Automation", "Visualization"];
    const selectedTag = queryString.parse(location.search).tag === undefined ? null : queryString.parse(location.search).tag;

    return {
        mainTags: mainTags,
        selectedTag: selectedTag,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilterClick: (event, tag) => {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Hub Filter',
                eventAction: 'Tag Selection',
                eventLabel: tag
            });
        }
    }
};

const PackageFilterBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageNav);

export default PackageFilterBar;
