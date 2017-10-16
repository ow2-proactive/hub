import { connect } from 'react-redux'
import { selectTag } from '../actions/index'
import PackageNav from '../components/PackageNav'
import queryString from 'query-string'

const mapStateToProps = (state, ownProps) => {
    if (state.packages === undefined) {
        return null;
    }

    const mainTags = ["All", "Get started", "Cloud Automation", "Machine Learning", "Finance", "Analysis"];
    const selectedTag = queryString.parse(location.search).tag === undefined ? null : queryString.parse(location.search).tag;

    return {
        mainTags: mainTags,
        selectedTag: selectedTag,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};

const PackageFilterBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageNav);

export default PackageFilterBar;
