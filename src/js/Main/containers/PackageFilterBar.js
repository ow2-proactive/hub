import { connect } from 'react-redux'
import { selectTag } from '../actions/index'
import PackageNav from '../components/PackageNav'

const mapStateToProps = (state, ownProps) => {
    if (state.packages === undefined) {
        return null;
    }

    const mainTags = ["All", "Staff pick", "Cloud Provider", "Monitoring", "Notification"];

    return {
        mainTags: mainTags,
        selectedTag: state.selectedTag,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTagSelection: (value) => {
            dispatch(selectTag(value));
        }
    }
};

const PackageFilterBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageNav);

export default PackageFilterBar;