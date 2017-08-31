import { connect } from 'react-redux'
import PackageCards from '../components/PackageCards'

const mapStateToProps = (state, ownProps) => {

    return {
        empty: null,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

const PackageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PackageCards);

export default PackageList;