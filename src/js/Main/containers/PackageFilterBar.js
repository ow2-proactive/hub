import { connect } from 'react-redux'
import { selectTag } from '../actions/index'
import PackageNav from '../components/PackageNav'
import queryString from 'query-string'

const mapStateToProps = (state, ownProps) => {
    if (state.packages === undefined) {
        return null;
    }

    const mainTags = ["All", "Get started", "Cloud Automation", "Machine Learning", "Finance", "Analysis"];

    return {
        mainTags: mainTags,
        selectedTag: queryString.parse(location.search).tag,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // onTagSelection: (value) => {
        //     dispatch(selectTag(value));
        // },
    }
};

const PackageFilterBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageNav);

export default PackageFilterBar;
