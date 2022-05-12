import { connect } from 'react-redux'
import { selectTag } from '../actions/index'
import PackageNav from '../components/PackageNav'
import queryString from 'query-string'

const mapStateToProps = (state, ownProps) => {
    if (state.packages === undefined) {
        return null;
    }

    const mainTags = ["All", "Artificial Intelligence", "BIG Data", "CI/CD, Versioning", "Cloud", "Container & VM", "Data Base", "ERP", "ETL & ELT", "File Transfer", "GPU, FPGA", "HPC", "ITSM/SEIM", "Languages", "Monitoring / Automation", "Security", "Visualization, simulation", "Other"];
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
